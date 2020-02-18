# <a name="deployments"></a> Deployments
When you are ready for your application to be deployed outside of your local development machine, you can deploy it to the cloud.

You will need to deploy both the frontend and the server.

For the frontend we recommend [Firebase](https://firebase.google.com/) or [Netlify](https://www.netlify.com/)

For the server, it's up to you. We will provide setup instructions below for:
**Heroku**
**Azure**
**AWS**
**GCP**

#### [Deployments](#deployments)
##### [Deploying the frontend](#frontend)
##### [Deploying the server](#server)


## <a name="frontend"></a>  Deploying the frontend
You can configure automated builds using a CI tool. That is outside the scope of this. Although if you'd like to add instructions please submit a [PR](https://github.com/kudoo-cloud/docs).

To deploy the frontend manually, you'll need to first setup your host.

Both Netlify and Firebase are fantastic for statically hosted sites. 

So create an account at one and then link your domain name to their DNS.

Once that's done, you'll need to install their relevant CLI tool
* Firebase - `npm install -g firebase-tools`
* Netlify - `npm install netlify-cli -g`

You can now build the frontend:
`cd frontend && npm install && npm run build`

You can now deploy with either
* `firebase deploy`
* `netlify deploy --open`

## <a name="server"></a> Deploying the Server

- [ ] Install a database 
- [ ] Setup a Production VM

### Install a database
You can use either [Postgres](https://www.postgresql.org/) or [MySQL](https://www.mysql.com/).

On top of that you can also use on on premise database (provided it is internet facing) or a cloud based SQL instance.

Setup the db and create a username and password with a database.

For this example let's say that we've created a databased called `kudoo` and then we've create a user called `postgres` with password `dbpassword`. These credentials will become important later.


### Setup a Production VM
We will be using `Ubuntu 18.04` in this guide. 

#### Link domain name
**Please note** This step is essential for ensuring that the server is deployed with `https`.
Please take a note of the external IP address of you server so that you can then link it to your domain name.

#### Install dependencies
Log into your server and clone `kudoo`

`git clone https://github.com/kudoo-cloud/kudoo`