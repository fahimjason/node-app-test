const assert = require('assert');
const { before } = require('mocha');

describe('file to be tested', () => {
    context('function to be tested', () => {
        before(() => {
            console.log('========before========');
        });

        after(() => {
            console.log('========after========');
        });

        beforeEach(() => {
            console.log('========before========');
        });

        afterEach(() => {
            console.log('========after========');
        });

        it('should do something', () => {
            assert.equal(1, 1);
        });

        it('should do something else', () => {
            assert.deepEqual({ name: 'Fahim' }, { name: 'Fahim' });
        });

        it('this is pending');
    });

    context('another function', () => {
        it('should do something');
    });
})