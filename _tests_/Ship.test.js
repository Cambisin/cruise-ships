const Ship = require('../src/ship.js');

describe('Ship', () => {
    xit('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Objects);
    });
    it('has a starting port', () => {
        const ship = new Ship('Plymouth');

        expect(ship.startingPort).toBe('Plymouth');
    });
});