#### [Deployments](#deployments)
##### [Deploying the frontend](#frontend)
##### [Deploying the server](#server)

# <a name="deployments"></a> Deployments
When you are ready for your application to be deployed outside of your local development machine, you can deploy it to the cloud.

You will need to deploy both the frontend and the server.

For the frontend we recommend [Firebase](https://firebase.google.com/) or [Netlify](https://www.netlify.com/)

For the server, it's up to you. We will provide setup instructions below for Ubuntu. Although theoretially you could run your deployment on Windows Servers too.

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

### Setup a Production VM