const Ship = require('../src/ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    xit('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Objects);
    });
    xit('has a starting port', () => {
        const ship = new Ship(port);

        expect(ship.currentPort).toBe(port);
    });
    xit('can set sail', () => {
        const ship = new Ship(port);

        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
    it('can dock at a different port', () => {
        const glasgow = new Port('Glasgow');
        const ship = new Ship(glasgow);

        const dublin = new Port('Dublin');
        ship.dock(dublin);

        expects(ship.currentPort).toBe(dublin);
    })
});