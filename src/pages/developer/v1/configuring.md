# Configuring the application

There are some things to note about a Menu Item

name: This field is a string and will indicate what appears in the Menu Item
order: This determines the order the menu item will appear
availability: This will help to determine for which users this Menu Item is available for. There are a few different criteria you can specify:
* country: [string];
* security?: Array<SecurityRole>;
* businessType?: Array<string>;
icon: This indicates the icon to use
url: This is the URL to add. Currently this is located in [Kudoo's Shared Component repo](https://github.com/KudooCloud/kudoo-shared-components) under `src/config/urls.js`. So when you're creating a new Menu Item, you'll need to link it to a Screen. To do this you create the URL.
isActive: This determines whether this MenuItem is active

# Adding an icon
This will go through how to add an Icon to the application

# Billing

We leverage [Stripe](https://stripe.com/) in order to help you accept payments from your Customers. 

In order to invoice and accept payments from your customers you will need to complete the following steps:
- [ ] Create a Stripe account
- [ ] Configure the Stripe environmental variables
- [ ] Update your Licensing information

## <a name='create-stripe'></a> Create a Stripe account

## <a name='configure-stripe'></a> Configure the Stripe environmental variables

## <a name='update-licensing'></a> Update your Licensing information