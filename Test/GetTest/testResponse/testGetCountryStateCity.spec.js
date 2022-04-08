const testDataNegative = require('../fixtures/getCountryStateCityTestDataNegative.json');
const testDataPositive = require('../fixtures/getCountryStateCityTestDataPositive.json');
const config = require('../support/setUp');
const commons = require('../support/helpers');
const status = require('../support/statusCodes');
const expect = require('chai').expect; //chai assertion
const request = require('supertest'); //request

describe('Testing GET request /country/state/city', () => {
    context('Happy Path', function () {
        Object.entries(testDataPositive.variants).forEach(([variant, data]) => {
            it(variant + ": " + data.message + " " + data.uri, async () => {
                const res = await commons.getRequest(config.baseUrl, data.uri)
                expect(res.statusCode).to.be.equal(status.ok);
                expect(res.body).to.be.deep.equal(data.response);
            })
        })


        context('Negative Scenarios', function () {
            Object.entries(testDataNegative.variants).forEach(([variant, data]) => {
                it(variant + ": " + data.message + " " + data.uri, async () => {
                    const res = await commons.getRequest(config.baseUrl, data.uri)
                    expect(res.statusCode).to.be.equal(status.notFound);
                    expect(res.body).to.be.deep.equal(data.response);
                })
            })
        })

    })
})   
