export default {
    language: { 
        name: 'English (US)'
    },
    main_fragment: {
        dashboard: 'Dashboard',
        basic: 'Basic Information',
        settings: 'Settings'
    },
    dashboard: {
        root_impl: 'Root implementation',
        zygote_monitor: 'Zygote Monitor',
        modules: 'No modules | Module (1) | Modules ({0})',
        root_impl_normal: 'Current Root Implementation is {impl}, denylist will work properly.',
        root_impl_abnormal: 'Could not determine Root Implementation, denylist will not work.',
        root_impl_multiple: 'Multiple Root Implementations found, denylist will not work.',
        kernelsu_denylist: 'Denylist of KernelSU refers to apps that are marked as \'Unmount modules\' in App Profile.',
        magisk_denylist: 'Denylist of Magisk refers to Magisk\'s built-in denylist.',
        apatch_denylist: 'Denylist of APatch refers to to SuperUser App which \'Exclude\' is enabled and disable root',
    },
    settings: {
        log_to_kernel: 'Log to dmesg (Only for developers)',
        enforce_denylist: 'Denylist Policy',
        enforce_denylist_desc: 'Enforced: any modification for apps in denylist will be reverted.<br/>Umount Only: only mount modifications for apps in denylist will be reverted.',
        denylist_disabled: 'Disabled',
        denylist_enforced: 'Enforced',
        denylist_just_umount: 'Unmount Only',
        anonymous_memory: 'Use anonymous memory',
        anonymous_memory_desc: 'Load modules into anonymous memory. This compromises log readability but circumvents certain outdated detection mechanisms.',
        zn_linker: 'Use Zygisk Next linker (Experimental)',
        zn_linker_desc: 'Use built-in linker instead of the system linker to load modules. This will enhance stealth but may cause compatibility issues.',
    },
    zygote_inject_state: {
        running: 'Running',
        stop_by_user: 'Stop by user',
        stop_by_crash: 'Stop by zygote crashed',
        running_desc: 'Zygote Monitor is running normally.',
        stop_by_user_desc: 'Zygote Monitor stopped by user.',
        stop_by_crash_desc: 'Repeated restarts of Zygote has been detected, Zygote Monitor has automatically stopped.',
    },
    zygote_state: {
        unknown: 'Unknown',
        injected: 'Injected ({pid})',
        inject_failed: 'Inject failed ({pid})',
        skipped: 'Skipped ({pid})',
        unknown_desc: 'The status of this Zygote is unknown and may exist but not be started, or the Zygote monitor may not detect its start.',
        injected_desc: 'Zygisk has been injected into the Zygote. Its process ID is {pid}',
        inject_failed_desc: 'Zygisk was attempted to be injected into this Zygote but failed. Its process ID is {pid}',
        skipped_desc: 'The Zygote was monitored to start. Its process ID is {pid}. But Zygisk injecting was stopped due to multiple previous soft reboots of the system.'
    },
    corrupted: {
        title: 'Module files corrupted',
        desc: 'Please revert the changes to Zygisk Next and try again.'
    }
}
