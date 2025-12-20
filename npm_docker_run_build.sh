#!/bin/bash
docker run -it --rm -v "$(pwd):/react-genzo" --workdir /react-genzo -p 8081:5173 arm32v7/node npm run build
