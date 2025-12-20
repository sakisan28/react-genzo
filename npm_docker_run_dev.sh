#!/bin/bash
docker run -it --rm -v "$(pwd):/react-genzo" --workdir /react-genzo -p 5173:5173 arm32v7/node npm run dev
