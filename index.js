/*
*Title: Update Monitor
*Description: A RESTFul API to monitor up or down;
*Author: Shafi
*Date:15/9/2021
*/

// Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/hanldeReqRes');
const environment = require('./helpers/environment')
const data = require('./lib/data')


// app object - module scaffolding
const app = {};

// testing file system
// @TODO
data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// Server Create 
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Environment Variable is ${process.env.NODE_ENV}`);
        console.log('Server is running on port', environment.port);
    })
};



// start the Server

app.createServer();