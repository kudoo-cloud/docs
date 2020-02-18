# Configuring the application

The main application can be configured using the `kudoo.toml` file located in the `frontend` folder.

Why did we choose `toml` over the more adopted `yaml`. Well have a read of this [https://github.com/golang/go/issues/23966#issuecomment-377997161]. TLDR: We decided `toml` was more simpler than `yaml` 

The `toml` file allows you specify the general skeleton of the application. So by editing the file you can specify:

Which apps you want to include

Which menu items you'd like to include in each app

What the security is for each menu item

This will be easier to show an example. Let's say we only want to deploy the `health` application.

We will then mark `isAvailable` field to `false` for all the other applications
![TOML unavailable](/assets/toml-unavailable.png)

This ensures those applications are not available.

Let's say we now want to adjust the security of a menu item. All we do is adjust the availability
![TOML security](/assets/toml-security.png)

In the above screenshot we can see that Dashboard is only available to `owners` and `admin` users and companies from Australia.