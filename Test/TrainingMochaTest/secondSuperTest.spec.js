//const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

const express = require('express');
const app = express();

app.get('/courses', (req, res) => {
    res.status(200).json({ name: 'api testing' });
});

app.get('/course', (req, res) => {
    let name = req.query.name;
    //console.log(name);
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

describe('get requests', () => {
    it('get course id', () => {
        request(app)
        .get('/course/1')
        .end((err, res) => {
            expect(res.body.id).to.be.equal('1');
        });
    });
    // localhost/course?name=mocha
    it('get query param name', () => {
        request(app)
        .get('/course')
        .query({ 'name' : 'mocha' })
        .expect(200, { id: '1', name: 'mocha' }); //expecting status code 200 along with the exprected response body
    });
});