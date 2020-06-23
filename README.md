# Citypop

Discover city populations around the world!

## Installation
To install **Citypop** you will need [Docker](https://www.docker.com/). Clone this repository and open the folder in your terminal.
- If you are using **bash** just run `./start` and then build and run the application.
- If you don't have access to **bash** an/or can't run the above script. Simply build the image and run the container using the following commands:

```bash
// build image
docker build -t citypop .

// run container
docker run \
    -it \
    --rm \
    -v "${PWD}":/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    --name citypop \
    citypop
```

## Usage
When the react app is up and running in your terminal, visit [http://172.17.0.2:3000/](http://172.17.0.2:3000/) to open the app.

## License
[MIT](https://choosealicense.com/licenses/mit/)
