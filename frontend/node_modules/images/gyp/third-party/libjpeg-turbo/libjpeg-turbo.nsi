!include x64.nsh
Name "libjpeg-turbo SDK for  64-bit"
OutFile "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}64.exe"
InstallDir c:\libjpeg-turbo-gcc64

SetCompressor bzip2

Page directory
Page instfiles

UninstPage uninstConfirm
UninstPage instfiles

Section "libjpeg-turbo SDK for  64-bit (required)"
!ifdef WIN64
	${If} ${RunningX64}
	${DisableX64FSRedirection}
	${Endif}
!endif
	SectionIn RO
!ifdef GCC
	IfFileExists $SYSDIR/libturbojpeg.dll exists 0
!else
	IfFileExists $SYSDIR/turbojpeg.dll exists 0
!endif
	goto notexists
	exists:
!ifdef GCC
	MessageBox MB_OK "An existing version of the libjpeg-turbo SDK for  64-bit is already installed.  Please uninstall it first."
!else
	MessageBox MB_OK "An existing version of the libjpeg-turbo SDK for  64-bit or the TurboJPEG SDK is already installed.  Please uninstall it first."
!endif
	quit

	notexists:
	SetOutPath $SYSDIR
!ifdef GCC
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\libturbojpeg.dll"
!else
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}turbojpeg.dll"
!endif
	SetOutPath $INSTDIR\bin
!ifdef GCC
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\libturbojpeg.dll"
!else
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}turbojpeg.dll"
!endif
!ifdef GCC
	File "/oname=libjpeg-62.dll" "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\sharedlib\libjpeg-*.dll"
!else
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\sharedlib\${BUILDDIR}jpeg62.dll"
!endif
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\sharedlib\${BUILDDIR}cjpeg.exe"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\sharedlib\${BUILDDIR}djpeg.exe"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\sharedlib\${BUILDDIR}jpegtran.exe"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}tjbench.exe"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}rdjpgcom.exe"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}wrjpgcom.exe"
	SetOutPath $INSTDIR\lib
!ifdef GCC
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\libturbojpeg.dll.a"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\libturbojpeg.a"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\sharedlib\libjpeg.dll.a"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\libjpeg.a"
!else
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}turbojpeg.lib"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}turbojpeg-static.lib"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\sharedlib\${BUILDDIR}jpeg.lib"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\${BUILDDIR}jpeg-static.lib"
!endif
!ifdef JAVA
	SetOutPath $INSTDIR\classes
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\java\${BUILDDIR}turbojpeg.jar"
!endif
	SetOutPath $INSTDIR\include
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\jconfig.h"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\jerror.h"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\jmorecfg.h"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\jpeglib.h"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\turbojpeg.h"
	SetOutPath $INSTDIR\doc
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\README"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\README-turbo.txt"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\example.c"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\libjpeg.txt"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\structure.txt"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\usage.txt"
	File "/Users/xiangshouding/Work/nodejs/gyp/third-party/libjpeg-turbo\wizard.txt"

	WriteRegStr HKLM "SOFTWARE\64 1.4.0" "Install_Dir" "$INSTDIR"

	WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\64 1.4.0" "DisplayName" "libjpeg-turbo SDK v1.4.0 for  64-bit"
	WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\64 1.4.0" "UninstallString" '"$INSTDIR\uninstall_1.4.0.exe"'
	WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\64 1.4.0" "NoModify" 1
	WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\64 1.4.0" "NoRepair" 1
	WriteUninstaller "uninstall_1.4.0.exe"
SectionEnd

Section "Uninstall"
!ifdef WIN64
	${If} ${RunningX64}
	${DisableX64FSRedirection}
	${Endif}
!endif

	SetShellVarContext all

	DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\64 1.4.0"
	DeleteRegKey HKLM "SOFTWARE\64 1.4.0"

!ifdef GCC
	Delete $INSTDIR\bin\libjpeg-62.dll
	Delete $INSTDIR\bin\libturbojpeg.dll
	Delete $SYSDIR\libturbojpeg.dll
	Delete $INSTDIR\lib\libturbojpeg.dll.a"
	Delete $INSTDIR\lib\libturbojpeg.a"
	Delete $INSTDIR\lib\libjpeg.dll.a"
	Delete $INSTDIR\lib\libjpeg.a"
!else
	Delete $INSTDIR\bin\jpeg62.dll
	Delete $INSTDIR\bin\turbojpeg.dll
	Delete $SYSDIR\turbojpeg.dll
	Delete $INSTDIR\lib\jpeg.lib
	Delete $INSTDIR\lib\jpeg-static.lib
	Delete $INSTDIR\lib\turbojpeg.lib
	Delete $INSTDIR\lib\turbojpeg-static.lib
!endif
!ifdef JAVA
	Delete $INSTDIR\classes\turbojpeg.jar
!endif
	Delete $INSTDIR\bin\cjpeg.exe
	Delete $INSTDIR\bin\djpeg.exe
	Delete $INSTDIR\bin\jpegtran.exe
	Delete $INSTDIR\bin\tjbench.exe
	Delete $INSTDIR\bin\rdjpgcom.exe
	Delete $INSTDIR\bin\wrjpgcom.exe
	Delete $INSTDIR\include\jconfig.h"
	Delete $INSTDIR\include\jerror.h"
	Delete $INSTDIR\include\jmorecfg.h"
	Delete $INSTDIR\include\jpeglib.h"
	Delete $INSTDIR\include\turbojpeg.h"
	Delete $INSTDIR\uninstall_1.4.0.exe
	Delete $INSTDIR\doc\README
	Delete $INSTDIR\doc\README-turbo.txt
	Delete $INSTDIR\doc\example.c
	Delete $INSTDIR\doc\libjpeg.txt
	Delete $INSTDIR\doc\structure.txt
	Delete $INSTDIR\doc\usage.txt
	Delete $INSTDIR\doc\wizard.txt

	RMDir "$INSTDIR\include"
	RMDir "$INSTDIR\lib"
	RMDir "$INSTDIR\doc"
!ifdef JAVA
	RMDir "$INSTDIR\classes"
!endif
	RMDir "$INSTDIR\bin"
	RMDir "$INSTDIR"

SectionEnd
