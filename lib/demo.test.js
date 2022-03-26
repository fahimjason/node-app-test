const cahi = require('chai');
const expect = cahi.expect;

const demo = require('./demo');

describe('demo', () => {
    context('add', () => {
        it('should add two number', () => {
            expect(demo.add(1, 3)).to.equal(4);
        })
    });

    context('callback', () => {
        it('should test the callback', (done) => {
            demo.addCallback(2, 3, (err, result) => {
                expect(err).to.not.exist;
                expect(result).to.equal(5);
                done();
            })
        })
    });

    context('test promises', () => {
        it('should add with promise cb', (done) => {
            demo.addPromise(1, 2).then((result) => {
                expect(result).to.equal(3);
                done();
            }).catch((err) => {
                console.error(err);
                done(err);
            });
        });

        it('should add with promise cb', (done) => {
            demo.addPromise(1, 2).then((result) => {
                expect(result).to.equal(3);
                done();
            })
        });
    })
})