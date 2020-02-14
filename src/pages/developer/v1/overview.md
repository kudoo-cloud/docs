# Working with Products
Kudoo currently has the following Products within the web application:
* Projects
* Health
* Inventory
* Finance
* Manufacturing

You can choose which Products you'd like to include by editing `src/security/index.tsx`.

Under the `const` Products, specify which Products you'd like to include by specifying `isAvailable` to either true or false.

# Adding menu items
To add menu items open `src/security/menuItems.tsx`

Under menu items you will see all the `const` for the Products
* projectMenuItems
* healthMenuItems
* inventoryMenuItems
* financeMenuItems
* manufacturingMenuItems

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
