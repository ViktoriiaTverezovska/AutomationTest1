const testData = require('/Users/viktoriiatverezovska/Documents/GitHub/AutomationTest1/Test/GetTest/fixtures/getCountryPostalcodeTestData.json');
const config = require('/Users/viktoriiatverezovska/Documents/GitHub/AutomationTest1/Test/GetTest/support/setUp.js');
const commons = require('/Users/viktoriiatverezovska/Documents/GitHub/AutomationTest1/Test/GetTest/support/helpers.js');
const status = require('/Users/viktoriiatverezovska/Documents/GitHub/AutomationTest1/Test/GetTest/support/statusCodes.js');
const expect = require('chai').expect; //chai assertion


describe('Testing GET request /country/postal-code', function () {
    context('Happy Path + Negative Scenarios', function () {
        Object.entries(testData.variants).forEach(([variant, data]) => {
            it(variant + ": " + data.message + " " + data.uri, async () => {
                const res = await commons.getRequest(config.baseUrl, data.uri)
                // expect(res.statusCode).to.be.equal(data.responseCode);
                if (variant.includes("Happy")) {
                    expect(res.statusCode).to.be.equal(status.ok);
                }
                else {
                    expect(res.statusCode).to.be.equal(status.notFound);
                }
                expect(res.body).to.be.deep.equal(data.response);
            })
        })
    })
})