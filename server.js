'use strict';
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql');
const config = require('./.config.json');

// console.log(".env file: ", env);

/*const connection = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'ohex.ddns.net',
    user     : 'karun',
    password : 'ksid',
    database : 'ohex_prod',
    debug    :  false
});*/

let connection;

if (process.env.NODE_ENV !== 'production' && config.test.enable) {
  const env = require('dotenv').config();
  const config = require('./.config.json');
  connection = mysql.createPool({
    connectionLimit : 100, //important
    // host     : databaseConfig.test.host,
    user     : config.test.username,
    // password : databaseConfig.test.password,
    database : config.test.database,
    debug    : false
  });

  connection.getConnection(function(err) {
    // connected! (unless `err` is set)
    if (err) {
      console.log(err);
      console.log("\nError in connecting to the TEST Database")
      return;
    }

    console.log("Connected with ID: ", connection.threadId);
    console.log("Connected to TEST Database !!!");
  });
}

if (process.env.NODE_ENV === 'production' && config.production.enable) {
  connection = mysql.createPool({
    host     : process.env.CLEAR_DB_HOST,
    user     : process.env.CLEAR_DB_USERNAME,
    password : process.env.CLEAR_DB_PASSWORD,
    database : process.env.CLEAR_DB_DATABASE
  });

  connection.getConnection(function(error) {
    // connected! (unless `err` is set)
    if (error) {
      console.log(error);
      console.log("\nError in connecting to the PRODUCTION Database")
      return;
    }

    // console.log("Connected with ID: ", connection.threadId);
    console.log("Connected to PRODUCTION Database !!!");

    connection.query("select * from menu_item", function(error, results){
      // connection.release();
      // Handle error after the release.
      if (error) throw error;

      // Don't use the connection here, it has been returned to the pool.
    });
  });
}

function getAllMenuItems(req, res) {
  connection.query("select * from menu_item", function(err, results){
      if(!err) {
          res.json(results);
      }
  });
}

if (process.env.NODE_ENV !== 'production') {

  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));

  app.listen(4000);
  console.log('DEV ENV server running at http://localhost:4000');

} else {
  const static_path = path.join(__dirname, 'dist');
  app.use(express.static(static_path));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  app.listen(port);
  console.log('PROD ENV server running at http://localhost:' + port);
}

// Server routes...
app.get("/database", function(req,res) {-
  getAllMenuItems(req, res);
});

app.get('/hello/me', (req, res) => res.send({ hi: 'there' }));
