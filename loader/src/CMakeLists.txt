cmake_minimum_required(VERSION 3.22.1)
project("loader")

find_package(cxx REQUIRED CONFIG)

add_definitions(-DSPOV_VERSION=\"${SPOV_VERSION}\")

aux_source_directory(common COMMON_SRC_LIST)
add_library(common STATIC ${COMMON_SRC_LIST})
target_include_directories(common PRIVATE include)
target_link_libraries(common cxx::cxx log)

aux_source_directory(injector INJECTOR_SRC_LIST)
add_library(perfopt SHARED ${INJECTOR_SRC_LIST})
target_include_directories(perfopt PRIVATE include)
target_link_libraries(perfopt cxx::cxx log common lsplt_static phmap)

aux_source_directory(ptracer PTRACER_SRC_LIST)
add_executable(libperfopt_ptrace.so ${PTRACER_SRC_LIST})
target_include_directories(libperfopt_ptrace.so PRIVATE include)
target_link_libraries(libperfopt_ptrace.so cxx::cxx log common)

add_subdirectory(external)
