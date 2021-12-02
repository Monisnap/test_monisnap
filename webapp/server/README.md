# Launch Star Wars server localy

  

The backend is completely Dockerized with everything needed (MongoDB, Mongo-Express to visualize database in browser), before launching the server you need to install Docker first on your machine [Get Docker](https://docs.docker.com/get-docker/)

  

## Build the stack

  

First open terminal command navigate to webapp directory (where docker-compose.yml located)and run the following command to build all containers:

### `docker-compose build && docker-compose up -d`

Everything is now working fine and the backend is running on [http://localhost:8080](http://localhost:8080), mongo-express is a light database ui manager for Mongo, you can access it in browser on  [http://localhost:8081](http://localhost:8081) to manager all your dbs.

Before running the client you need to import all characters in database, to do this run the following command:

### `docker exec -it server npm run migration`

  At this point everything is ready and you can now run the client side of the app (Please refer to client/README.md) and star voting for your favorite charachters

To run tests use the following command: 

### `docker exec -it server npm test`

A complete html coverage report is generated in **/coverage** directory