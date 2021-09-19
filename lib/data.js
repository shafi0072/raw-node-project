/*
*Title: data 
*Description: A RESTFul API for data;
*Author: Shafi
*Date:19/9/2021
*/

// dependesis
const fs = require('fs');

const path = require('path');


// module scaffolding 
const lib = {};

// base dir of the data folder 

lib.basedir = path.join(__dirname, '/../.data/');

// write Data to file 

lib.create = (dir, file, data, callback) => {
    // open file for write 
    fs.open(lib.basedir+dir+'/'+file+'.json', 'wx', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            // convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and then close it 
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if(!err2){
                    fs.close(fileDescriptor, (err3) => {
                        if(!err3){
                            callback(false)
                        }
                        else{
                            callback('error to closing the file');
                        }
                    });
                }
                else{
                    callback('Error writing to new file')
                }
            });
        }
        else{
            callback(err)
        }
    });

};

// Read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(lib.basedir+dir+'/'+file+'.json', 'utf-8', (err, data) => {
        callback(err, data);
    });
};

// update Existing file

lib.update = (dir, file, data, callback) => {
    // file open for writing
    fs.open(lib.basedir+dir+'/'+file+'.json', 'r+', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            // convert the data to String
            const stringData = JSON.stringify(data);

            // truncedFile
            fs.ftruncate(fileDescriptor, (err) => {
                if(!err){
                    // write to the file
                    fs.writeFile(fileDescriptor, stringData, (err) => {
                        if(!err){
                            // close file
                            fs.close(fileDescriptor, (err) => {
                                if(!err){
                                    callback(false)
                                }
                                else{
                                    callback('error to closing')
                                }
                            });
                        }
                        else{
                            callback('Error to write the update')
                        }
                    });
                }
                else{
                    callback('Error to trunceted file')
                }
            });
        }
        else{
            console.log(`Error updating file may not exist`)
        }
    });
};

// Delete existing file
lib.delete = (dir, file, callback) => {
    // unlicnk
    fs.unlink(lib.basedir+dir+'/'+file+'.json', (err) => {
        if(!err){
            callback(false);
        }
        else{
            callback('error to deleting file');
        }
    })
};


module.exports = lib
