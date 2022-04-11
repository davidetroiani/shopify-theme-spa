# shopify-theme-spa
This repository includes a Shopify theme that integrates a React app that makes authorized requests to a NodeJs app's web service.

## What is it about?
This project shows how to integrate a React single page application in your Shopify theme and make authorized requests to a custom NodeJs app. This way, you can just integrate any app in your Shopify theme and access the currently logged customer to read and manipulate user data with a custom app. User data can be stored in Shopify or anywhere else.

## The demo
The project adds a voucher-validation functionality to a Shopify theme. The validation is made by a remote custom server-side application. The front-end components (a text box and a button) are run by React and the remote application runs NodeJs.

## Installation
To run this project will need:
- Shopify CLI
- A Shopify store
- React
- NodeJs with npm
- serve Node package (npm i -g serve)

You can find huge documentation on how to install and run the Shopify CLI and how to integrate it with your Shopify Store.

## Explanation
The shopify-theme folder contains the default Dawn theme (I loaded the whole package so you can just clone the repo and run it). I added a new section ("sections/voucher-check.liquid" file). The section is then added to the home page by configuring the templates/index.json file.

The react-app folder contains a small React project with a single component with a dummy feature. The App.js contains the logic that calls the remote web service by appending two headers used for authorization.

The node-app folder contains a small NodeJs project that exposes a web service that validates the authorization headers and send back a response. The index.js file contains the web service's logic.

## Run the project
1. Install the dependencies (npm i) and build the React application
2. Serve the build folder by exposing it to the port 3001
3. Install the dependencies (npm i) and expose the Node app to the port 3000
4. Debug the Shopify theme locally (port 9292)
5. Sign is as customer and scroll to the middle of the home page: you will find a long text box ending with a "GO!" button. 
6. Type a voucher and press the button so the web service is called

Keep the Inspector open and see the requests being sent to the server-side application

## Further notes
- Feel free to create your own algorithm to generate the hash, as long as both the liquid file and the NodeJs app use the same exact algorithm to generate it.
- Use the Shopify Proxy feature to increase the security: it allows you to have your remote web services called directly by Shopify; your front-end React app will call Shopify's proxy endpoints so your web services' URLs are not exposed to the browser. Find more documentation on Shopify reference.
- Use SSL.
- Consider caching user data in your remote app so you don't have to call Shopify Customer API to gather further data for the validation.