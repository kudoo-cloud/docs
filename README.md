[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Kudoo Docs

## Getting Started

Make sure that you have the Gatsby CLI program installed:
```sh
npm install -g gatsby-cli
```
For development build, run
```sh
npm run develop
```
For production build, run
```sh
npm run build
```

## Docs
Docs for all categories are in respective directories under `/src/pages` .

## Versioning

For versioning we have `versions.json` file under all category directories.

#### List Versions
To list versions just fire below command.
`npm run version -- -c <category> -l`

For e.g. `npm run version -- -c user -l`

#### Add Version
To add version just fire below command.
`npm run version -- -c <category> -a <version>`

For e.g. `npm run version -- -c user -a 1.0.0`

#### Remove Version
To remove version just fire below command.
`npm run version -- -c <category> -r <version>`

For e.g. `npm run version -- -c user -r 1.0.0`

> Adding/Removing version using above method is recommended.

## Sidebar Configuration
For sidebar, we will need to put `sidebar.json` file under every version. So we can manage links and order of links in sidebar for every version.
#### Below is the sample code for simple sidebar
```
[
  {
    "label": "Account",
    "link": "/account"
  },
  {
    "label": "Company",
    "link": "/company"
  }
]
```
Above code will create 2 links in sidebar. `label` will be used to display label in sidebar and `link` will be used to navigate user to particular page.
When user click on `Account` link, it will try to find docs under `/account` path.

#### Below is the code to create advance nested sidebar
```
[
  {
    "label": "Auth",
    "link": "/auth",
    "children": [{
	    "label": "User",
	    "link": "/user",
    },{
	    "label": "Admin",
	    "link": "/admin",
    },{
	    "label": "Developer",
	    "link": "/developer",
    }]
  },
]
```
Above code will create `Auth` links in sidebar with 3 nested collapsible menu items. `link` will also behave as nested link. So when user click on `Admin` link in dropdown it will redirect to `/auth/admin` because parent `Auth` menu has `/auth` link.
In terms of file structure it should be `auth` directory and under that directory 3 markdown files named `user`, `admin`, `developer` and one `index.md` file under `auth` directory which will handle `/auth` path.

You can do as many nested menu you want.
