.PHONY: up down deploy/*

.env:
	@cp .env.example .env

up: .env
	docker-compose up -d

down:
	docker-compose down

SLACK_API=
deploy/prod:
	TEXT="deploy 開始" APP_NAME="ua-detector" APP_URL="http://ua-detector.zoe.tools" sh notify.sh
	git pull origin master
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
	TEXT="deploy 完了" APP_NAME="ua-detector" APP_URL="http://ua-detector.zoe.tools" sh notify.sh