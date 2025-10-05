export default {
    language: { 
        name: '中文（简体）' 
    },
    main_fragment: {
        dashboard: '仪表板',
        basic: '基本信息',
        settings: '设置'
    },
    dashboard: {
        root_impl: 'Root 实现',
        zygote_monitor: 'Zygote 监视器',
        modules: '模块 ({0})',
        root_impl_normal: '当前 Root 实现为 {impl}，排除列表将正常工作。',
        root_impl_abnormal: '无法确定 Root 实现，排除列表将不会工作。',
        root_impl_multiple: '当前存在多个 Root 实现，排除列表将不会工作。',
        kernelsu_denylist: 'KernelSU 的排除列表指 App Profile 中被标记为卸载模块的应用。',
        magisk_denylist: 'Magisk 的排除列表指 Magisk 内置的排除列表。',
        apatch_denylist: 'APatch 的排除列表指超级用户中标记为排除模块的应用且未被授予 root 权限。',
    },
    settings: {
        log_to_kernel: '日志写入 dmesg（仅供开发者使用）',
        enforce_denylist: '排除列表策略',
        enforce_denylist_desc: '强制：还原对位于排除列表中的 App 做出的所有变更。<br/>仅还原挂载：仅还原对位于排除列表中的 App 做出的挂载变更。',
        denylist_disabled: '关闭',
        denylist_enforced: '强制',
        denylist_just_umount: '仅还原挂载',
        use_zn_linker: '使用 Zygisk Next 链接器（实验性）',
    },
    zygote_inject_state: {
        running: '运行中',
        stop_by_user: '停止（用户请求）',
        stop_by_crash: '停止（Zygote 崩溃）',
        running_desc: 'Zygote 监视器正在正常运行。',
        stop_by_user_desc: 'Zygote 监视器被用户停止。',
        stop_by_crash_desc: '检测到 Zygote 反复重启，Zygote 监视器已自动关闭。',
    },
    zygote_state: {
        unknown: '未知',
        injected: '已注入 ({pid})',
        inject_failed: '注入失败 ({pid})',
        skipped: '已跳过 ({pid})',
        unknown_desc: '该 Zygote 的状态未知，可能存在而未启动，或 Zygote 监视器未检测到其启动。',
        injected_desc: '该 Zygote 已被注入 Zygisk ，其进程 ID 为 {pid}',
        inject_failed_desc: '该 Zygote 曾被尝试注入 Zygisk 但失败，其进程 ID 为 {pid}',
        skipped_desc: '该 Zygote 被监视到启动，其进程 ID 为 {pid}，但由于此前系统发生多次软重启，因此停止注入 Zygisk'
    },
    corrupted: {
        title: '模块文件损坏',
        desc: '请还原对 Zygisk Next 的修改后重试'
    }
}
