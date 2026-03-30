#include "daemon.h"
#include "logging.h"
#include "zygisk.hpp"
#include "module.hpp"

using namespace std;

void *self_handle = nullptr;

extern "C" [[gnu::visibility("default")]]
void entry(void* handle, const char* path) {
    LOGI("Library injected, version %s", SPOV_VERSION);
    self_handle = handle;
    zygiskd::Init(path);

    if (!zygiskd::PingHeartbeat()) {
        LOGE("Daemon is not running");
        return;
    }

#ifdef NDEBUG
    logging::setfd(zygiskd::RequestLogcatFd());
#endif

    LOGI("Start hooking");
    hook_functions();
}
