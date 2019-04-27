# Install script for directory: /Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib

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
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE SHARED_LIBRARY FILES
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/libjpeg.62.1.0.dylib"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/libjpeg.62.dylib"
    "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/libjpeg.dylib"
    )
  foreach(file
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libjpeg.62.1.0.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libjpeg.62.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libjpeg.dylib"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      execute_process(COMMAND "/usr/bin/install_name_tool"
        -id "libjpeg.62.dylib"
        "${file}")
      if(CMAKE_INSTALL_DO_STRIP)
        execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "${file}")
      endif()
    endif()
  endforeach()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/bin" TYPE EXECUTABLE FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/cjpeg")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/cjpeg" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/cjpeg")
    execute_process(COMMAND "/usr/bin/install_name_tool"
      -change "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/libjpeg.62.dylib" "libjpeg.62.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/cjpeg")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/cjpeg")
    endif()
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/bin" TYPE EXECUTABLE FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/djpeg")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/djpeg" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/djpeg")
    execute_process(COMMAND "/usr/bin/install_name_tool"
      -change "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/libjpeg.62.dylib" "libjpeg.62.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/djpeg")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/djpeg")
    endif()
  endif()
endif()

if("${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/bin" TYPE EXECUTABLE FILES "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/jpegtran")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/jpegtran" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/jpegtran")
    execute_process(COMMAND "/usr/bin/install_name_tool"
      -change "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo/sharedlib/libjpeg.62.dylib" "libjpeg.62.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/jpegtran")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/Users/xiangshouding/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/jpegtran")
    endif()
  endif()
endif()

