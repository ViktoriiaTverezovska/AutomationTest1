//const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

const express = require('express');
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/courses', (req, res) => {
    res.status(200).json({ name: 'api testing' });
});

app.get('/course', (req, res) => {
    let name = req.query.name;
    res.json({ id: '1', name: name });
});

app.get('/course/:id', (req, res) => {
    let id = req.params.id;
    let name;
    if(id === '1') {
        name = 'mocha';
    };
    res.json({ id: id, name: name });
});

app.post('/course', (req, res) => {
    let name = req.body.name;
    res.json({ id: '2', name: name });
});

app.post('/course', (req, res) => {
    let name = req.body.name;
    res.json({ id: '2', name: name });
});

describe('Post requests', () => {
//format: json
    it('json response', () => {
        request(app)
        .post('/course')
        .send({ "name" : "supertest" }) //sending the request body in json format
        .set('Accept', 'application/json') //adding Accept header. [The accept header] when we send a json object, we are going to add 'application/json' accept header
//once we verified the response, we want to assert the body/what we expect        
        .end((err, res) => {
//once the request is completed, we are going to get a response
            expect(res.body.name).to.be.equal('supertest');
//verify the response body returns the name of our course
        });
    });
//format: form
    it('form response', (done) => {
        request(app)
        .post('/course')
        .send('name=supertest')
        .set('Accept', 'application/x-www-form-urlencoded')
        .expect(200, {"id": "2", "name": "supertest"}, done);
    });
});