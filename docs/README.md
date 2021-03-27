# MERN App

The React application was created in `client`. The full normal react application is in that directory, and can be run directly by typing:
```
cd client
npm start
```

Likewise, remember, the node server needs to run, as it handles the API calls. You can run it from the MAIN application directory (*not* from the client subdirectory):
```
npm start
```

Note there are shortcuts to run both concurrently for development (from the MAIN app directory):
```
npm run start:dev
```


# DEVELOPMENT

If you are building React application from scratch or switching in a React folder, there is one important change needed to be done to the *react* package.json, adding this line:
```
"proxy": "http://localhost:8080",
```
That line allows the dev-mode react application to access the API's from your local node server.

Then run the test environment from the root application (this will concurrently start node server.js && npm start [for react client]):
```
npm run start:dev
```
It will be available from: http://localhost:3000



# PRODUCTION

When you are ready to deploy, make sure you create the deployment code:
```
npm run build
```

Then deploy it. Set the environmental variable NODE_ENV=production.

If testing the deployed code locally, set NODE_ENV=production in .env and:
```
npm run start:prod
```

It will be available from: http://localhost:8080



**Note** you should install two dev-dependencies:
npm install concurrently --save-dev
npm install if-env --save-dev
npm install nodemon --save-dev