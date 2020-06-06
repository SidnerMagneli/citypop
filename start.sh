#!/bin/bash

clear

read -r -p "Do you want to build/rebuild the image? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
   echo "Buildning image..."
   docker build -t citypop .
fi

clear
echo "Firing up container!!!"
docker run \
    -it \
    --rm \
    -v "${PWD}":/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    --name citypop \
    citypop
