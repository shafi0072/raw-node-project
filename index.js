/*
*Title: Update Monitor
*Description: A RESTFul API to monitor up or down;
*Author: Shafi
*Date:15/9/2021
*/

// Dependencies
const http = require('http');


const {handleReqRes} = require('./helpers/hanldeReqRes')
// app object - module scaffolding
const app = {};

// configuration

app.config = {
    port: 3000,
};

// Server Create 
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(app.config.port, () => {
        console.log('Server is running on port',app.config.port);
    })
};



// start the Server

app.createServer();