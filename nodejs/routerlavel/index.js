const dotenv = require('dotenv').config()
const { join, resolve } = require("path");
const express = require('express')
const path = require('path')
const connectDB = require('./app/config/db')
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express()
connectDB()
const namedRouter = require("route-label")(app);
/******************** Import Configuration and Custome Modules *******************/
const appConfig = require(resolve(join(__dirname, "app/config", "index")));

// Import Utils Module
const utils = require(resolve(join(__dirname, "app/helper", "utils")));


/******************** Configuration Registration *******************/
const getPort = appConfig.appRoot.port; // get port number
const getHost = appConfig.appRoot.host; // get host
const isProduction = appConfig.appRoot.isProd;
const getApiFolderName = appConfig.appRoot.getApiFolderName;
const getAdminFolderName = appConfig.appRoot.getAdminFolderName;

// Global function to generate URLs for named routes
global.generateUrl = generateUrl = (routeName, routeParams = {}) => {
    // Generate the URL using the named route and parameters
    const url = namedRouter.urlFor(routeName, routeParams);
    // Return the generated URL
    // console.log(url); // for testing
    return url;
};

// Serving public folder statically
app.use(express.static(resolve(join(__dirname, "public"))));
app.use(express.static("./public"));
app.use(express.json({ limit: "50mb", }));
// Get information from html forms
app.use(express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 2000,
})
);
app.use(morgan('dev'));

const onError = (error) => {
    // Retrieve the port that the server is trying to listen on
    const port = getPort;
  
    // Check if the error is related to the 'listen' system call,
    // which happens when the server attempts to bind to a port.
    if (error.syscall !== "listen") {
      // If it's not a 'listen' error, rethrow the error and handle it elsewhere
      throw error;
    }
  
    // Determine the type of binding:
    // If the port is a string, it's likely a named pipe; if it's a number, it's a network port.
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  
    // Switch statement to handle specific error codes that may occur when listening on a port
    switch (error.code) {
      // Case when the process lacks permissions to bind to the specified port --> Access Denied
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        // Exit the process with an exit code of 1 (indicating an error)
        process.exit(1);
        break;
  
      // Case when the specified port or pipe is already in use by another process --> Port Already in Use
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        // Exit the process with an exit code of 0 (indicating normal termination)
        process.exit(0);
        break;
  
      // Default case: If the error code is something else, rethrow the error to be handled elsewhere
      default:
        throw error;
    }
  };

  (async () => {
    try {
     
      /*********************** Connect Routes **********************/
  // -------api folder route-------

  const apiFiles = await utils._readdir(`./app/routes/${getApiFolderName}`);

  apiFiles.forEach((file) => {
    if (!file || file[0] == ".") return;
    namedRouter.use("/api", require(join(__dirname, file)));
  });

  // -------user folder route-------

  const userFiles = await utils._readdir(`./app/routes/${getAdminFolderName}`);

  userFiles.forEach((file) => {
    if (!file || file[0] == ".") return;
    namedRouter.use("/", require(join(__dirname, file)));
  });

  
      // Building the Route Tables for debugging
      namedRouter.buildRouteTable();
  
      if (!isProduction && process.env.SHOW_NAMED_ROUTES === "true") {
        const apiRouteList = namedRouter.getRouteTable("/api");
        const userRouteList = namedRouter.getRouteTable("/")
  
        // Show both route tables simultaneously
        console.log("Route Tables:");
        console.log("API Routes:", apiRouteList);
        console.log("User Routes:", userRouteList);
      }
  
      // Set-up server
      app.listen(getPort);
      app.on("error", onError);
      console.log(`Project is running on http://${getHost}:${getPort}`);
    } catch (error) {
      console.log(error);
    }
  })();

  
