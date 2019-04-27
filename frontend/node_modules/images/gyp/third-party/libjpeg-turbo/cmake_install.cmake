# Install script for directory: /Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "c:/libjpeg-turbo-gcc64")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Release")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/libjpeg.a")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libjpeg.a" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libjpeg.a")
    execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/ranlib" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libjpeg.a")
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/bin" TYPE EXECUTABLE FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/rdjpgcom")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/rdjpgcom" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/rdjpgcom")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/rdjpgcom")
    endif()
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/bin" TYPE EXECUTABLE FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/wrjpgcom")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/wrjpgcom" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/wrjpgcom")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/wrjpgcom")
    endif()
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE SHARED_LIBRARY FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/libturbojpeg.dylib")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libturbojpeg.dylib" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libturbojpeg.dylib")
    execute_process(COMMAND "/usr/bin/install_name_tool"
      -id "libturbojpeg.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libturbojpeg.dylib")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libturbojpeg.dylib")
    endif()
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/libturbojpeg.a")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libturbojpeg.a" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libturbojpeg.a")
    execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/ranlib" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libturbojpeg.a")
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/bin" TYPE EXECUTABLE FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/tjbench")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/tjbench" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/tjbench")
    execute_process(COMMAND "/usr/bin/install_name_tool"
      -change "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/libturbojpeg.dylib" "libturbojpeg.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/tjbench")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/tjbench")
    endif()
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/doc" TYPE FILE FILES
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/README"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/README-turbo.txt"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/example.c"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/libjpeg.txt"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/structure.txt"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/usage.txt"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/wizard.txt"
    )
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/jconfig.h"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/jerror.h"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/jmorecfg.h"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/jpeglib.h"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/turbojpeg.h"
    )
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/simd/cmake_install.cmake")
  include("/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/cmake_install.cmake")

endif()

if(CMAKE_INSTALL_COMPONENT)
  set(CMAKE_INSTALL_MANIFEST "install_manifest_${CMAKE_INSTALL_COMPONENT}.txt")
else()
  set(CMAKE_INSTALL_MANIFEST "install_manifest.txt")
endif()

string(REPLACE ";" "\n" CMAKE_INSTALL_MANIFEST_CONTENT
       "${CMAKE_INSTALL_MANIFEST_FILES}")
file(WRITE "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/${CMAKE_INSTALL_MANIFEST}"
     "${CMAKE_INSTALL_MANIFEST_CONTENT}")
