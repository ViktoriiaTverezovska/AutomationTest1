//server
let express = require('express'),
    router = express.Router();

router.route('/create').post((req, res) => {
    return res.json({ "created": req.body });
});

router.route('/').get((req, res) => {
    return res.json({ "users" : [{_id: "123", name: "lewis", email: "lewis@myapp.com"}] });
});

const nock = require('nock');
const request = require('supertest');
const expect = require('chai').expect;

describe('mock response', () => {
    beforeEach(() => {
        nock('http://localhost:4000')
        .get('/users')
        .reply(200, { 
            "users": [{ "id": "1"}]
        });
    });
    it('nock intercepts', () => {
        request('http://localhost:4000')
        .get('/users')
        .end((err, res) => { 
            expect(res.body.users[0].id).to.be.equal("1");
        });
    });
});