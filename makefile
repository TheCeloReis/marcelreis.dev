build:
	yarn run eslint
	yarn run tsc
	yarn run test

	yarn build
	yarn export

	node sitemap.js
