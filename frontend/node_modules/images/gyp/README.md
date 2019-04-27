# gyp

## use

0. <del>download third party, `sh third-party.sh`</del>
0. config your `binding.gyp`

    if dependent on `zlib`, you can add the following code to `binding.gyp`

    ```javascript
    "dependencies": [
        "./gyp/zlib.gyp:zlib"
    ]
    ```
    Sample:

    ```javascript
    {
        "targets": [{
            "target_name": "addon",
            
            ...

            "dependencies": [
                "./gyp/zlib.gyp:zlib"
            ]

            ...
            
        }]
    }
    ```

## F&Q

- for windows
    - require `cygwin`, need `wget`
    - **giflib**, 'not found `unistd.h`', you can delete **`#include <unistd.h>`**
    - **libjpeg-turbo**, must require `CMAKE`, can download from http://www.cmake.org/download/
    
- for Linux / Mac
    - require `wget`、`cmake`
