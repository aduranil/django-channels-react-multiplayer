{
    'targets': [{
        'target_name': 'libpng',
        'type': 'static_library',
        'include_dirs': [
            '../third-party/libpng',
        ],
        'direct_dependent_settings': {
            'include_dirs': [
                '../third-party/libpng',
            ],
        },
        'cflags': [
            '-w',
            '-fvisibility=hidden',
        ],
        'dependencies': [
            'zlib.gyp:zlib'
        ],
        'libraries': [
            '-lm'
        ],
        'sources': [
            '../third-party/libpng/png.c',
            '../third-party/libpng/pngerror.c',
            '../third-party/libpng/pngget.c',
            '../third-party/libpng/pngmem.c',
            '../third-party/libpng/pngpread.c',
            '../third-party/libpng/pngread.c',
            '../third-party/libpng/pngrio.c',
            '../third-party/libpng/pngrtran.c',
            '../third-party/libpng/pngrutil.c',
            '../third-party/libpng/pngset.c',
            '../third-party/libpng/pngtrans.c',
            '../third-party/libpng/pngwio.c',
            '../third-party/libpng/pngwrite.c',
            '../third-party/libpng/pngwtran.c',
            '../third-party/libpng/pngwutil.c',
        ],
        'conditions': [
            ['OS!="linux"', {
                'defines': [
                ]
            }]
        ]
    }]
}
