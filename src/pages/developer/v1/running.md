# Running the application

This guide will walk you through running Kudoo locally. If you're interested in running Kudoo in production please look at [Deployments](deployment)

  - [Prerequisites](#prerequisites)
  - [Credentials](#credentials)
  - [Running](#running)

## Prerequisites
You'll need to have the following running on your local machine

### [Node](https://nodejs.org/en/)
**Please note** We will always use the [long term release](https://nodejs.org/en/about/releases/) supported version of Node. Currently this is 12.

We'd suggest using a Node Version Manager in order to manage your Node versions.

For non windows users [NVM](https://github.com/nvm-sh/nvm) or if you're using Windows then please use [NVM-Windows](https://github.com/coreybutler/nvm-windows)

You'll need to have the following global packages installed
`npm install -g pm2`

[PM2](https://pm2.keymetrics.io/) is a daemon process manager that will help you manage and keep your application online 24/7 

### [Docker](https://www.docker.com/) 
**Please note** Docker for Windows is still pretty new and not an ideal developer experience. You can get it running, but we've run into multiple performance issues running on pretty high specced out laptops.

Also please ensure that you have [Docker compose](https://docs.docker.com/compose/) installed locally.

### [Postgres](https://www.postgresql.org/) or [MySQL](https://www.mysql.com/)
We support both Postgres and MySQL. This is because under the hood we use [Prisma](https://prisma.io). We have some concerns about using Prisma in the long term, so if you'd like to future proof your application, we recommend using Postgres.

Please create a new database to be used for Kudoo.

### Third party services
The Kudoo application also sends emails and saves `pdf` documents to cloud storage. 

For emails we currently only support [SendGrid](https://sendgrid.com/). If you'd like add support for [Mailgun](https://www.mailgun.com/) or an alternative please submit a [pull request](https://github.com/kudoo-cloud/kudoo).

For cloud storage we use [Amazon S3](https://aws.amazon.com/s3/) to store files. If you'd like to add support for [Azure](https://azure.microsoft.com/en-au/)or [Google Cloud](https://cloud.google.com/) please submit a [pull request](https://github.com/kudoo-cloud/kudoo).

### Australian Healthcare Identifiers
We also have a REST api for [Australian Heatlhcare Identifiers](https://github.com/kudoo-cloud/aus-healthidentifiers). If you are developing an Australian Health application, please see the repository for setting up a local development environment.

 
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