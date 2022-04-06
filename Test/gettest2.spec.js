const request = require('supertest'); //request
const expect = require('chai').expect; //chai assertion
let server = "http://api.zippopotam.us";

describe('Testing GET request /country/state/city', () => {
    context('Happy Path', function () {
        it('Verify response when user sends valid request with country, state, and city [/us/co/denver]', (done) => {
            request(server)
                .get('/us/co/denver')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(200);
                    expect(res.body).to.be.deep.equal(
                        {
                            "country abbreviation": "US",
                            "places": [
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.8568",
                                    "post code": "80201",
                                    "latitude": "39.7263"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9946",
                                    "post code": "80202",
                                    "latitude": "39.7491"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9811",
                                    "post code": "80203",
                                    "latitude": "39.7313"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0259",
                                    "post code": "80204",
                                    "latitude": "39.734"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9661",
                                    "post code": "80205",
                                    "latitude": "39.759"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9524",
                                    "post code": "80206",
                                    "latitude": "39.7331"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9177",
                                    "post code": "80207",
                                    "latitude": "39.7584"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80208",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9686",
                                    "post code": "80209",
                                    "latitude": "39.7074"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9631",
                                    "post code": "80210",
                                    "latitude": "39.679"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0204",
                                    "post code": "80211",
                                    "latitude": "39.7665"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0493",
                                    "post code": "80212",
                                    "latitude": "39.7683"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0643",
                                    "post code": "80214",
                                    "latitude": "39.7436"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.1009",
                                    "post code": "80215",
                                    "latitude": "39.7435"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9669",
                                    "post code": "80216",
                                    "latitude": "39.7835"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80217",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9717",
                                    "post code": "80218",
                                    "latitude": "39.7327"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0341",
                                    "post code": "80219",
                                    "latitude": "39.6956"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9129",
                                    "post code": "80220",
                                    "latitude": "39.7312"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9988",
                                    "post code": "80221",
                                    "latitude": "39.838"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9279",
                                    "post code": "80222",
                                    "latitude": "39.671"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0028",
                                    "post code": "80223",
                                    "latitude": "39.7002"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9108",
                                    "post code": "80224",
                                    "latitude": "39.688"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.1204",
                                    "post code": "80225",
                                    "latitude": "39.6971"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0918",
                                    "post code": "80226",
                                    "latitude": "39.7123"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0854",
                                    "post code": "80227",
                                    "latitude": "39.6667"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.156",
                                    "post code": "80228",
                                    "latitude": "39.6888"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9227",
                                    "post code": "80229",
                                    "latitude": "39.8671"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.8951",
                                    "post code": "80230",
                                    "latitude": "39.7218"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.8843",
                                    "post code": "80231",
                                    "latitude": "39.6793"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0908",
                                    "post code": "80232",
                                    "latitude": "39.6895"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9407",
                                    "post code": "80233",
                                    "latitude": "39.9015"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0109",
                                    "post code": "80234",
                                    "latitude": "39.9108"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0795",
                                    "post code": "80235",
                                    "latitude": "39.6472"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0376",
                                    "post code": "80236",
                                    "latitude": "39.6535"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.8987",
                                    "post code": "80237",
                                    "latitude": "39.6431"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80238",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.8288",
                                    "post code": "80239",
                                    "latitude": "39.7878"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9548",
                                    "post code": "80241",
                                    "latitude": "39.9274"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80243",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80244",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9312",
                                    "post code": "80246",
                                    "latitude": "39.7086"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.8819",
                                    "post code": "80247",
                                    "latitude": "39.6971"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80248",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.7556",
                                    "post code": "80249",
                                    "latitude": "39.7783"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80250",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80251",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80252",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80254",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80255",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9928",
                                    "post code": "80256",
                                    "latitude": "39.7474"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80257",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9913",
                                    "post code": "80259",
                                    "latitude": "39.7462"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-105.0041",
                                    "post code": "80260",
                                    "latitude": "39.8672"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.985",
                                    "post code": "80261",
                                    "latitude": "39.7379"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9384",
                                    "post code": "80262",
                                    "latitude": "39.731"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80263",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9863",
                                    "post code": "80264",
                                    "latitude": "39.7426"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80265",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9915",
                                    "post code": "80266",
                                    "latitude": "39.7472"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80270",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80271",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9875",
                                    "post code": "80273",
                                    "latitude": "39.7273"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9876",
                                    "post code": "80274",
                                    "latitude": "39.7439"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80275",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80279",
                                    "latitude": "39.7388"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9069",
                                    "post code": "80280",
                                    "latitude": "39.7167"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9876",
                                    "post code": "80281",
                                    "latitude": "39.7439"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9813",
                                    "post code": "80285",
                                    "latitude": "39.7427"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9876",
                                    "post code": "80290",
                                    "latitude": "39.7436"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9876",
                                    "post code": "80291",
                                    "latitude": "39.7439"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9928",
                                    "post code": "80292",
                                    "latitude": "39.7474"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9907",
                                    "post code": "80293",
                                    "latitude": "39.7458"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.989",
                                    "post code": "80294",
                                    "latitude": "39.7491"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.9863",
                                    "post code": "80295",
                                    "latitude": "39.7455"
                                },
                                {
                                    "place name": "Denver",
                                    "longitude": "-104.4083",
                                    "post code": "80299",
                                    "latitude": "39.7388"
                                }
                            ],
                            "country": "United States",
                            "place name": "Denver",
                            "state": "Colorado",
                            "state abbreviation": "CO"
                        }
                    );
                    done();
                });

        });
        it('Verify response when user sends valid request with country, state, and city [/us/tx/austin]', (done) => {
            request(server)
                .get('/us/tx/austin')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(200);
                    expect(res.body).to.be.deep.equal(
                        {

                            "country abbreviation": "US",
                            "places": [
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "73301",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "73344",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7426",
                                    "post code": "78701",
                                    "latitude": "30.2713"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7166",
                                    "post code": "78702",
                                    "latitude": "30.2638"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7648",
                                    "post code": "78703",
                                    "latitude": "30.2907"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7658",
                                    "post code": "78704",
                                    "latitude": "30.2428"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7396",
                                    "post code": "78705",
                                    "latitude": "30.2896"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78708",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78709",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7151",
                                    "post code": "78710",
                                    "latitude": "30.352"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78711",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7354",
                                    "post code": "78712",
                                    "latitude": "30.2852"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8433",
                                    "post code": "78713",
                                    "latitude": "30.4686"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.4438",
                                    "post code": "78714",
                                    "latitude": "30.3358"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.4865",
                                    "post code": "78715",
                                    "latitude": "30.4501"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8588",
                                    "post code": "78716",
                                    "latitude": "30.3162"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7472",
                                    "post code": "78717",
                                    "latitude": "30.506"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78718",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6667",
                                    "post code": "78719",
                                    "latitude": "30.1802"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78720",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6868",
                                    "post code": "78721",
                                    "latitude": "30.2721"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.715",
                                    "post code": "78722",
                                    "latitude": "30.2893"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6849",
                                    "post code": "78723",
                                    "latitude": "30.3085"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6396",
                                    "post code": "78724",
                                    "latitude": "30.296"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6243",
                                    "post code": "78725",
                                    "latitude": "30.2562"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8326",
                                    "post code": "78726",
                                    "latitude": "30.43"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7195",
                                    "post code": "78727",
                                    "latitude": "30.4254"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6811",
                                    "post code": "78728",
                                    "latitude": "30.4417"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7688",
                                    "post code": "78729",
                                    "latitude": "30.4521"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8241",
                                    "post code": "78730",
                                    "latitude": "30.3607"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7609",
                                    "post code": "78731",
                                    "latitude": "30.3471"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.9007",
                                    "post code": "78732",
                                    "latitude": "30.3752"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8666",
                                    "post code": "78733",
                                    "latitude": "30.3314"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.9427",
                                    "post code": "78734",
                                    "latitude": "30.3705"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8414",
                                    "post code": "78735",
                                    "latitude": "30.249"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.916",
                                    "post code": "78736",
                                    "latitude": "30.2444"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.9427",
                                    "post code": "78737",
                                    "latitude": "30.2107"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.9824",
                                    "post code": "78738",
                                    "latitude": "30.3337"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8784",
                                    "post code": "78739",
                                    "latitude": "30.172"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7223",
                                    "post code": "78741",
                                    "latitude": "30.2315"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6703",
                                    "post code": "78742",
                                    "latitude": "30.2313"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7472",
                                    "post code": "78744",
                                    "latitude": "30.1876"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7956",
                                    "post code": "78745",
                                    "latitude": "30.2063"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8181",
                                    "post code": "78746",
                                    "latitude": "30.2971"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7433",
                                    "post code": "78747",
                                    "latitude": "30.1204"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8225",
                                    "post code": "78748",
                                    "latitude": "30.1743"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8508",
                                    "post code": "78749",
                                    "latitude": "30.2166"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7967",
                                    "post code": "78750",
                                    "latitude": "30.4224"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7242",
                                    "post code": "78751",
                                    "latitude": "30.3093"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7004",
                                    "post code": "78752",
                                    "latitude": "30.3316"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6827",
                                    "post code": "78753",
                                    "latitude": "30.3648"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6673",
                                    "post code": "78754",
                                    "latitude": "30.3423"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78755",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.739",
                                    "post code": "78756",
                                    "latitude": "30.3223"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7316",
                                    "post code": "78757",
                                    "latitude": "30.3437"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7078",
                                    "post code": "78758",
                                    "latitude": "30.3764"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7526",
                                    "post code": "78759",
                                    "latitude": "30.4036"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78760",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78761",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78762",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.5598",
                                    "post code": "78763",
                                    "latitude": "30.3354"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6595",
                                    "post code": "78764",
                                    "latitude": "30.4455"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78765",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6233",
                                    "post code": "78766",
                                    "latitude": "30.4422"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.8963",
                                    "post code": "78767",
                                    "latitude": "30.222"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78768",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78769",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78771",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78772",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78773",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78774",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78778",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78779",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78780",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78781",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78782",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78783",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78785",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78786",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78787",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78788",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.7713",
                                    "post code": "78789",
                                    "latitude": "30.3264"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.6826",
                                    "post code": "78798",
                                    "latitude": "30.3718"
                                },
                                {
                                    "place name": "Austin",
                                    "longitude": "-97.757",
                                    "post code": "78799",
                                    "latitude": "30.2962"
                                }
                            ],
                            "country": "United States",
                            "place name": "Austin",
                            "state": "Texas",
                            "state abbreviation": "TX"

                        }
                    );
                    done();
                });
        })
        it('Verify response when user sends valid request with country, state, and city [/us/ut/moab]', (done) => {
            request(server)
                .get('/us/ut/moab')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(200);
                    expect(res.body).to.be.deep.equal(
                        {
                            
                                "country abbreviation": "US",
                                "places": [
                                    {
                                        "place name": "Moab",
                                        "longitude": "-109.5271",
                                        "post code": "84532",
                                        "latitude": "38.5677"
                                    }
                                ],
                                "country": "United States",
                                "place name": "Moab",
                                "state": "Utah",
                                "state abbreviation": "UT"
                            
                        }
                    );
                    done();
                });
        })
    });

    context('Negative Scenarios', function () {
        it('Verify response when user sends request with valid country, state but invalid city [/us/co/cc]', (done) => {
            request(server)
                .get('/us/co/cc')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });
        it('Verify response when user sends request with valid country, city but invalid state [/us/cc/miami]', (done) => {
            request(server)
                .get('/us/cc/miami')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });
        it('Verify response when user sends request with valid state, city but invalid country [/cc/co/denver]', (done) => {
            request(server)
                .get('/cc/co/denver')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });

        it('Verify response when user sends request with missing city [/us/co/]', (done) => {
            request(server)
                .get('/us/co/')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);

                    done();
                });
        });
        it('Verify response when user sends request with missing state & city [/us/]', (done) => {
            request(server)
                .get('/us/')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    
                    done();
                });
        });
        it('Verify response when user sends request with missing country [/co/denver]', (done) => {
            request(server)
                .get('/co/denver')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });
        it('Verify response when user sends request with missing country & state [/denver]', (done) => {
            request(server)
                .get('/denver')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);

                    done();
                });
        });

        it('Verify response when user sends request with incorrect country [/au/co/denver]', (done) => {
            request(server)
                .get('/au/co/denver')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });

        it('Verify response when user sends request with incorrect state [/us/ut/denver]', (done) => {
            request(server)
                .get('/us/ut/denver')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });

        it('Verify response when user sends request with incorrect city [/us/co/miami]', (done) => {
            request(server)
                .get('/us/co/miami')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });

        it('Verify response when user sends request with incorrect parameters order [/denver/co/us]', (done) => {
            request(server)
                .get('/denver/co/us')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    expect(res.body).to.be.deep.equal({});
                    done();
                });
        });

        it('Verify response when user sends request with missing country & city [/co/]', (done) => {
            request(server)
                .get('/co/')
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(404);
                    
                    done();
                });
        });
    });
});   