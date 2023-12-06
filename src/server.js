const express = require('express'); // common js
require('dotenv').config(); 
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const mysql = require('mysql2');

const app = express(); //app express
const port = process.env.PORT || 3000; // port
const hostname = process.env.HOST_NAME;

//config template engine and static file
configViewEngine(app);

// khai bao route
app.use('/',webRoutes);

// test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, // default 3306
  user: 'root', // default empty
  password: '123456',
  database: 'hoidanit'
});

connection.query(
  'select * from Users',
  function (error, results, field){
    console.log(">>>>> results= ", results);
    console.log(">>>>> fields= ", field);
  }
);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})