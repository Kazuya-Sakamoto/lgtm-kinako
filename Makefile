up:
	docker-compose up -d --build

sh:
	docker-compose exec app sh

install:
	docker-compose exec app sh -c "pnpm install"

dev:
	docker-compose exec app sh -c "pnpm dev"

story:
	docker-compose exec app sh -c "pnpm storybook"

test:
	docker-compose exec app sh -c "pnpm test"

down:
	docker-compose down --volumes --rmi local

