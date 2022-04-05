describe('Mocha Hooks', function(){

    before('Execute Before All Tests', function(){
        console.log('1 - Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('00 - Execute Before Each Test');
    });

    after('Execute After All Tests', function(){
        console.log('2 - Execute After All Tests');

    });

    afterEach('Execute After Each Test', function(){
        console.log('11 - Execute Before Each Test');
    });

    it('Test 1', function(){

        console.log('Mocha - This is a Test for Mocha Hooks');
    })
    it('Test 2', function(){

        console.log('Mocha - This is a Test for Mocha Hooks');
    })
})