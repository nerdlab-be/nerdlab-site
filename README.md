# Nerdlab sites

## Setup

Requirements:
- [Server requirements](https://github.com/craftcms/docs/blob/master/en/requirements.md)
- NodeJS 7.2.1 or [NVM](https://github.com/creationix/nvm)
- [Gulp](https://gulpjs.com/)
- [Composer](https://getcomposer.org/download/)


- Clone this repo
- On windows w. Laragon -> change folder name to 'nerdlab'

### Web

- Navigate to web-folder 'cd web'
- You don't need to change anything in this folder

### Craft

- Navigate to web-folder 'cd craft'
- Create a '.env' file from '.env-example'
    - Edit the values to work with your local database (we used Laragon for Windows / Valet for Mac)
- Run 'composer install'

### Main folder

- Run 'npm install'
- Create a 'gulpconfig.js' file from 'gulpfile.example.js'

### Start 
- Start your PHP/MYSQL-server (Laragon/Valet)
- Run 'npm start'
- Go to nerdlab.test

## Gulp tasks (see gulpfile.babel.js for details)
- 'gulp watch': run a watch task with browsersync, scss, js concat, etc.
- 'gulp build': build production assets (css, js)
- 'gulp staging': upload files to staging server
- 'gulp deployStaging': build file and upload to staging server

## Craft CMS

Learn more about Craft at [craftcms.com](https://craftcms.com).

## How to Install Craft 4

See the Craft 4 documentation at [https://craftcms.com/docs/4.x/](https://craftcms.com/docs/4.x/).