const request = require('supertest'); //request
const expect = require('chai').expect; //chai assertion
let server = "http://api.zippopotam.us";

describe('Testing GET request /country/postal-code', () => {
    context('Happy Path', function () {
        it('Verify response when user sends valid country & zip [/us/80222]', (done) => {
            request(server)
                .get('/us/80222')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(200);
                    expect(res.body).to.be.deep.equal(
                        {
                            "post code": "80222",
                            "country": "United States",
                            "country abbreviation": "US",
                            "places": [
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9279",
                                    "state": "Colorado",
                                    "state abbreviation": "CO",
                                    "latitude": "39.671"
                                }
                            ]
                        });
                    done();
                });

        });
        it('Verify response when user sends valid country & zip (lower edge [us/00210])', (done) => {
            request(server)
                .get('/us/00210')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(200);
                    expect(res.body).to.be.deep.equal(
                        {
                            "post code": "00210",
                            "country": "United States",
                            "country abbreviation": "US",
                            "places": [
                                {
                                    "place name": "Portsmouth",
                                    "longitude": "-71.0132",
                                    "state": "New Hampshire",
                                    "state abbreviation": "NH",
                                    "latitude": "43.0059"
                                }
                            ]
                        });
                    done();
                });
        })
        it('Verify response when user sends valid country & zip (upper edge [/us/99950])', (done) => {
            request(server)
                .get('/us/99950')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(200);
                    expect(res.body).to.be.deep.equal(
                        {
                            "post code": "99950",
                            "country": "United States",
                            "country abbreviation": "US",
                            "places": [
                                {
                                    "place name": "Ketchikan",
                                    "longitude": "-131.4327",
                                    "state": "Alaska",
                                    "state abbreviation": "AK",
                                    "latitude": "55.542"
                                }
                            ]
                        }
                        );
                    done();
                });
        })
    });

    context('Negative Scenarios', function () {
        it('Verify response when user sends valid country & invalid zip (less than lower edge [/us/00209])', (done) => {
            request(server)
                .get('/us/00209')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });
        it('Verify response when user sends invalid country & invalid zip [/usa/99952]', (done) => {
            request(server)
                .get('/usa/99952')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });
        it('Verify response when user sends invalid country & valid zip [/usa/80222]', (done) => {
            request(server)
                .get('/usa/80222')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });

        it('Verify response when user sends valid country & valid zip code from another country [au/80222]', (done) => {
            request(server)
                .get('/au/80222')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });
        it('Verify response when user sends valid country & invalid zip (more than upper edge [/us/99951])', (done) => {
            request(server)
                .get('/us/99951')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });
        it('Verify response when user sends partially empty request (no postal code [/us/])', (done) => {
            request(server)
                .get('/us/')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    done();
                });
        });
        it('Verify response when user sends partially empty request (no country [/80222])', (done) => {
            request(server)
                .get('/80222')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    done();
                });
        });
    });
});   