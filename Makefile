install:
	npm install

build:
	npm run build

serve:
	npm run serve

convert:
	node ./utils/convertToWebp.js

lint:
	npm run lint

prettier:
	npx prettier --check .
