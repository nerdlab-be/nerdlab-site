# Nerdlab sites

## Setup

Requirements:
- [Server requirements](https://github.com/craftcms/docs/blob/master/en/requirements.md)
- NodeJS 20.11.1 or [NVM](https://github.com/creationix/nvm)

Setup:
- Run 'ddev start'
- Get a database copy and import it into dddev: "ddev import-db --file=db.sql"
- Create a '.env' file from '.env-example'
- Run 'ddev composer install'
- Run 'ddev npm install'
- Run 'ddev npm run build'

Vite tasks:
- 'ddev npm start': run a vite server.
- 'ddev npm run build': build the project.

## Craft CMS

Learn more about Craft at [craftcms.com](https://craftcms.com).
