build:
	yarn build
	yarn export

	node sitemap.js

check:
	yarn run prettier
	yarn run eslint
	yarn run tsc
	yarn run test