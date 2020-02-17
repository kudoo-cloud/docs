# Running the application

This guide will walk you through running Kudoo locally. If you're interested in running Kudoo in production please look at [Deployments](deployment)

- [Prerequisites](#prerequisites)
- [Credentials](#credentials)
- [Running](#running)

## Prerequisites
You'll need to have the following running on your local machine
* [Node](https://nodejs.org/en/)
* [Docker](https://www.docker.com/) **Please note** Docker for Windows is still pretty new and not an ideal developer experience. You can get it running, but it's not something we support.
* [Docker compose](https://docs.docker.com/compose/)
* [Postgres](https://www.postgresql.org/) or [MySQL](https://www.mysql.com/)

For Node we'd suggest install [NVM](https://github.com/nvm-sh/nvm). If you're using Windows then please use [NVM-Windows](https://github.com/coreybutler/nvm-windows)

**Please note** We will always use the long term release supported version of Node. Currently this is 12.

You'll need to have the following global packages installed
`npm install -g pm2`

**Please note** We use [Amazon S3](https://aws.amazon.com/s3/) to store files. To enable this functionality you must setup AWS S3.
 
## Credentials
You will now need to setup your environmental variables.

Firstly you'll need to adjust the `linux.yml` file and add your database username and password.

Copy the `env.sample` file to two new files:
* .env
* .env.development

And then configure the variables.

Here's an example config
```.env
# FRONTEND
NODE_ENV=development
GRAPHQL_API_URL=http://localhost:3000/api/
STRIPE_API_KEY=testing
SKELM_BASE_URL=http://localhost:3000
```
## Running
There is a bash script you can use but it's still `WIP`. So to get the local environment running locally follow these steps:
```bash
docker-compose -f server.yml up -d
cd server
pm2 start skelm-pm2.json
cd ../frontend
npm install
npm run start
```