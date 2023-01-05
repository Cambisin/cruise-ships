const Ship = require("../src/ship")


describe('ship', () => {
    it('returns ship', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});