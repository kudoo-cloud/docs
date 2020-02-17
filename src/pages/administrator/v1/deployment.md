#### [Deployments](#deployments)
##### [Deploying the frontend](#frontend)
##### [Deploying the server](#server)

# <a name="deployments"></a> Deployments
When you are ready for your application to be deployed outside of your local development machine, you can deploy it to the cloud.

You will need to deploy both the frontend and the server.

For the frontend we recommend [Firebase](https://firebase.google.com/) or [Netlify](https://www.netlify.com/)

For the server, it's up to you. We will provide setup instructions below for Ubuntu. Although theoretially you could run your deployment on Windows Servers too.

## <a name="frontend"></a>  Deploying the frontend
To get started using automated deployments there is some setup you'll need to perform.

We use [Drone](https://drone.io/) for our Automated deployments. 

Once you signed up for Kudoo cloud through the [Portal](https://portal.kudoo.io) all you need to do to activate your Drone account is to visit https://drone.kudoo.io and then authorise the application. 
![Authorise Drone](assets/drone-authorisation.png)
You will now have access to Drone.

You can now open the `web-app` repository
![Web app repository](assets/drone-repo.png)

Under the source directory there will be a file called `.drone.yml`. 

## <a name="server"></a> Deploying the Server