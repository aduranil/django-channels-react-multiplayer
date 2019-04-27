#!/usr/bin/env bash

exit 1

## libpng ##
wget "https://jaist.dl.sourceforge.net/project/libpng/libpng16/1.6.29/libpng-1.6.29.tar.gz" -O "./libpng.tar.gz"
tar xvf libpng.tar.gz
mv -f libpng-1.6.29 ./third-party/libpng
#fix Linux compile error
cd ./third-party/libpng/
    cp ./scripts/pnglibconf.h.prebuilt ./pnglibconf.h
    # close warning
    if [ "$(uname)" = "Linux" ]; then
        sed -i  "s/#define PNG_WARNINGS_SUPPORTED/\/\/#define PNG_WARNINGS_SUPPORTED/" ./pnglibconf.h
    else
        sed -i '' "s/#define PNG_WARNINGS_SUPPORTED/\/\/#define PNG_WARNINGS_SUPPORTED/" ./pnglibconf.h
    fi
cd -
rm libpng.tar.gz

## libjpeg-turbo ##
wget "http://downloads.sourceforge.net/project/libjpeg-turbo/1.4.0/libjpeg-turbo-1.4.0.tar.gz" -O "./libjpeg-turbo.tar.gz"
tar xvf libjpeg-turbo.tar.gz
mv -f libjpeg-turbo-1.4.0 ./third-party/libjpeg-turbo
cd ./third-party/libjpeg-turbo
    cmake . || (echo ':MUST: need cmake' && exit 1)
cd -
rm libjpeg-turbo.tar.gz

## giflib ##
wget "https://jaist.dl.sourceforge.net/project/giflib/giflib-5.1.4.tar.bz2" -O "./giflib.tar.gz"
tar xvf giflib.tar.gz
mv -f giflib-5.1.4 ./third-party/giflib
rm giflib.tar.gz

## zlib ##
wget "http://downloads.sourceforge.net/project/libpng/zlib/1.2.8/zlib-1.2.8.tar.gz" -O "./zlib.tar.gz"
tar xvf zlib.tar.gz
mv -f zlib-1.2.8 ./third-party/zlib
rm zlib.tar.gz
