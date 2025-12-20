#!/bin/bash
docker run -it --rm -v "$(pwd):/react-genzo" --workdir /react-genzo arm32v7/node npm install
