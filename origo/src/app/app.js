{
    "name" = "origo",
    "version" = "1.0.0",
    "description" = "",
    "main" = "index.js",
    "scripts" = {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start" : "nodemon app.js"
    },
    "author" = "",
    "license" = "ISC",
    "dependencies" = {
      "express": "^4.17.1",
      "nodemon": "^2.0.3"
    }
  }
  const express = require('express');


const app = express();



app.listen(4000, () => {
    console.log('listening on port 4000');
})