install:
	npm install

build:
	npm run build

serve:
	npm run serve

convert:
	node ./utils/convertToWebp.js

lint:
	npx eslint . --ext js,jsx

prettier:
	npx prettier --check .
