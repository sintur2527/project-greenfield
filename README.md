# Vibranium Shopping Portal

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Description](#description)
3. [Components](#components)
4. [Requirements](#requirements)
5. [Building and Running](#building-and-running)
6. [Notes](#notes)

### Technologies Used
![Main Page](documentation/Logos.png)

### Description
> Vibranium Shopping Portal comprises a complete redesign of an outdated client-facing retail web-portal. This redesign provides an item details page which includes an image gallery, styles to choose from, simple cart without session capability, questions and answers, and ratings and reviews
>
> - Built entirely using React, React Hooks, and Redux
> - Client pages served through an Express server
> - Packaged using Webpack and transpiled with Babel.js
> - Designed with Material UI, following Material Design standards set by Google

### Components

1. [Product Overview](documentation/overview/README.md) - Soumith Inturi
2. [Questions and Answers](documentation/questions/README.md) - Xiao Xie
3. [Ratings and Reviews](documentation/reviews/README.md) - Andrew Kan

### Requirements

Beyond the npm modules in the package.json, you should have the following installed:

- Node v10.16.0 (LTS as of July 2019) or higher

API Key from Filestack

[Filestack](https://www.filestack.com/)

- Config file with API key (FileUploader_API_KEY) required in client/config folder to access the file uploader used to upload images you have for answers to questions and for reviews

#### Initial Config

After cloning the folder, please

1.Make a copy of the /client/config_example folder, and rename it as /client/config

2.Create an account in https://www.filestack.com/, and replace the apikey in /client/config/config.js

!!!IMPORTANT!!! NEVER checkout your API key to github

### Building and Running

First install dependencies:

```sh
npm install
```

To create a development build:

```sh
npm run build
```

To create a production build:

```sh
npm run production
```

To start the server and continuously build webpack

```sh
npm run dev
```

Click this link to view the product

[Vibranium](http://localhost:3000/shop/1)

### Notes

> **Redux + React Hooks**
>
> - Overarching state management done with [Redux](https://redux.js.org)
> - Functional component state management done with [React Hooks](https://reactjs.org/docs/hooks-intro.html)

> **URL Routing**
>
> - Client side routing done with [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)

> **Design**
>
> - Designed with [Material UI](https://material-ui.com/) following Material Design standards

> **API and Images**
>
> - Information to populate the site provided by Hack Reactor
> - Images used in the API from [Unsplash](https://unsplash.com/)