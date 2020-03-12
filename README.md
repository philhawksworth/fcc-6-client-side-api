## freeCodeCamp JAMstack examples

# 6 - Client-side rendering targeted API content

This repo holds one of a series of examples of JAMstack sites from a freeCodeCamp video. The video, "Introduction to JAMstack" is available to view for free on freeCodeCamp.

## About this example

The last of our 6 code examples, this example builds on [example 5](https://findthat.at/jamstack/ex5) to use progressive enhancement to add weather data to the page with client-side rendering.

Here in the video, we add JavaScript to use access the user's location via the Geolocation API, and then request local weather data from https://openweathermap.org/ which is then added to the page.

## Prerequisites

This code will make use of a browser API which can only be used when accessed over a secure HTTPS connection. To configure your local development environment to serve requests over HTTPS you'll need to first create a certificate for local testing, and ensure that you rlocal machine trusts that cert. The confioguration of browsersync in Eleventy is [shown in the video](https://youtu.be/A_l0qrPUJds?t=157m40s)

- [Generate a free certificate for localhost](https://letsencrypt.org/docs/certificates-for-localhost/)
- [Trusting your local certificate](https://www.youtube.com/watch?time_continue=75&v=TGrX8XgSuZ4)

By default, [sites on Netlify are automatically configured with a free certifcate](https://docs.netlify.com/domains-https/https-ssl/?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex#certificate-service-types) provided by LetsEncrypt, so no additional steps will be reuired in the CI/CD and hosting environments.

## Local development

To work on this example locally, you can clone the repository and start editing, although there are a few pre-requisites:

- [NodeJS and NPM](https://nodejs.org/)
- A free [Netlify account](https://www.netlify.com?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex)
- A free [newsapi.org](https://newsapi.org/) API key
- A free [openweathermap.org](https://openweathermap.org/) API key

```bash

# clone the repo
git clone https://github.com/philhawksworth/fcc-6-client-side-api

# move into the working directory and install dependencies
cd fcc-6-client-side-api
npm install

# build and start the local development server
npm start

# just run the build
npm run build

```

## Clone and deploy

If you wanted to quickly clone this repository and deploy it as a new site on [Netlify](https://www.netlify.com?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex) you can click the button below for a rapid start. This will give you a ready-made CI/CD pipeline linked to your git commits.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/fcc-6-client-side-api)



## Watch the video

For a better understanding of what this example is and why it exists, you can jump directly into the video at the point we are discussing this example

[![JAMstack video](https://www.freecodecamp.org/news/content/images/size/w1000/2020/03/jamstack.png)](https://youtu.be/A_l0qrPUJds?t=148m08s)


## Other code examples in this series

- [Example 1 - All simply static](https://findthat.at/jamstack/ex1)
- [Example 2 - Changing the DOM with JavaScript](https://findthat.at/jamstack/ex2)
- [Example 3 - Introducing a static site generator](https://findthat.at/jamstack/ex3)
- [Example 4 - Generating pages from a content API](https://findthat.at/jamstack/ex4)
- [Example 5 - Generating localized pages, with geo-IP routing at the CDN](https://findthat.at/jamstack/ex5)
- [Example 6 - Client-side rendering targeted API content](https://findthat.at/jamstack/ex6) (👈 you are here)


## More JAMstack resources to explore

- [jamstack.org](https://jamstack.org?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex) - More info and resources
- [Official JAMstack slack](https://jamstack.org/slack) - conversation about JAMstack and web development (come on in!)
- [Modern Web Development on the JAMstack, O'reilly, 2019](https://findthat.at/jamstack/book) - Book on building websites with the JAMstack. Available as a free e-book.
