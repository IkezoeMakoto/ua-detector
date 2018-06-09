.PHONY: up down deploy/*

.env:
	@cp .env.example .env

up: .env
	docker-compose up -d

down:
	docker-compose down

deploy/prod:
	git pull
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d