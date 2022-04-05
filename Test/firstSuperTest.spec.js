const express = require ('express'); //express server
const request = require('supertest'); //supertest is a request
const expect = require('chai').expect; //chai assertion
const app = express (); //instanciate a server to create an app

app.get('/first', (err,res)=> { //get request pointing to the first example; 
    //the example takes error and response a call back function
    res.status(200).json({"ok": "response"}); //response is returned for the first end point to return a status code
    //status we want to return is 200; once we got status, we want to return a json response
});
//once we got the express server, we can start the test

describe('First test', ()=>{
    it('OK response', ()=> {
        request(app)
        .get('/first')
        .end((err,res)=>{ // on completion os the test, return call back
            expect(res.statusCode).to.be.equal(200);
        });
    });
    it('Mocky OK Response', (done) => {
        request('https://run.mocky.io')
        .get('/v3/53ccf307-5de1-4e65-b747-f2254bf72a1c')
        .expect(200,done)
    })
});

//usually when you are testing your APIs, you will be hitting HTTP server
//and your API will be hosted there