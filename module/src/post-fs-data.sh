#!/system/bin/sh

MODDIR=${0%/*}
if [ "$ZYGISK_ENABLED" ]; then
  exit 0
fi

cd "$MODDIR"

if [ "$(which magisk)" ]; then
  for file in ../*; do
    if [ -d "$file" ] && [ -d "$file/zygisk" ] && ! [ -f "$file/disable" ]; then
      if [ -f "$file/post-fs-data.sh" ]; then
        cd "$file"
        log -p i -t "perf-sh" "Manually trigger post-fs-data.sh for $file"
        sh "$(realpath ./post-fs-data.sh)"
        cd "$MODDIR"
      fi
    fi
  done
fi

create_sys_perm() {
  mkdir -p $1
  chmod 555 $1
  chcon u:object_r:system_file:s0 $1
}

export TMP_PATH=/sbin
[ -d /sbin ] || export TMP_PATH=/debug_ramdisk

create_sys_perm $TMP_PATH

if [ -f $MODDIR/lib64/libperfopt.so ];then
  create_sys_perm $TMP_PATH/lib64
  cp $MODDIR/lib64/libperfopt.so $TMP_PATH/lib64/libperfopt.so
  chcon u:object_r:system_file:s0 $TMP_PATH/lib64/libperfopt.so
fi

if [ -f $MODDIR/lib/libperfopt.so ];then
  create_sys_perm $TMP_PATH/lib
  cp $MODDIR/lib/libperfopt.so $TMP_PATH/lib/libperfopt.so
  chcon u:object_r:system_file:s0 $TMP_PATH/lib/libperfopt.so
fi

[ "$DEBUG" = true ] && export RUST_BACKTRACE=1
./bin/perfopt-ptrace64 monitor &
