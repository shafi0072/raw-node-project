/*
*Title: Update Monitor
*Description: A RESTFul API to monitor up or down;
*Author: Shafi
*Date:15/9/2021
*/

// Dependencies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder')

// app object - module scaffolding
const app = {};

// configuration

app.config = {
    port: 3000,
};

// Server Create 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log('Server is running on port',app.config.port);
    })
};

// Handle Request Response 

app.handleReqRes = (req, res) => {
    // request handleing
    // url getting and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query; 
    const headersObject = req.headers;

    // stream Decoder
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData +=  decoder.write(buffer);
        
    });

    // after done the event of data

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello Programmers');
    })

    
    
};

// start the Server

app.createServer();