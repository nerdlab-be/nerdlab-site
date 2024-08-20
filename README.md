# Nerdlab sites

## Setup

Requirements:
- [Server requirements](https://github.com/craftcms/docs/blob/master/en/requirements.md)
- NodeJS 7.2.1 or [NVM](https://github.com/creationix/nvm)
- [Gulp](https://gulpjs.com/)

Setup:
- Clone the repository
- Windows: Download Laragon
- Mac: Download Valet
- Download Database en run the SQL file
- Run 'composer install'
- Create a '.env' file from '.env-example'
- Run 'npm install'
- Create a 'gulpconfig.js' file from 'gulpfile.example.js'
- Run 'npm start'

Gulp tasks (see gulpfile.babel.js for details):
- 'gulp watch': run a watch task with browsersync, scss, js concat, etc.
- 'gulp build': build production assets (css, js)
- 'gulp staging': upload files to staging server
- 'gulp deployStaging': build file and upload to staging server

## Craft CMS

Learn more about Craft at [craftcms.com](https://craftcms.com).

## How to Install Craft 4

See the Craft 4 documentation at [https://craftcms.com/docs/4.x/](https://craftcms.com/docs/4.x/).