# Basic Chat Application
## Laura Eckman, 2017

To get the project up and running:
1. Install Docker https://docs.docker.com/engine/installation/
2. In a terminal, cd into the chat-app directory. 
3. `docker-compose up chat`
4. Test that it's running http://localhost:13000/test

To restart the project

    docker-compose down
    docker-compose up <backend or fullstack>

To see schema changes, remove the old db volume by adding `-v` when stopping

    docker-compose down -v

To see code changes, rebuild by adding `--build` when starting

    docker-compose up --build chat

If you run into issues connecting to the db on startup, try restarting (without the `-v` flag).
