deploy:
	lerna run lint
	lerna run build
	lerna run export

	node sitemap.js

	firebase deploy