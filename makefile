build:
	yarn run prettier
	yarn run eslint
	yarn run test
	yarn run tsc

	yarn build
	yarn export
