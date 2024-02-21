DOCKER_COMPOSE := docker-compose
DOCKER_COMPOSE_FILE := ./docker-compose.yml

build:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) build

run:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) up

stop:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) down

help:
	@echo "Available commands:"
	@echo "  make build         : To build the docker images for the application."
	@echo "  make run           : Run the application containers."
	@echo "  make stop          : Stop the running containers."
	@echo "  make help          : Display this help message."
