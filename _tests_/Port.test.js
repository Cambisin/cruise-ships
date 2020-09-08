const Port = require('../src/Port.js');

describe('Port', () => {
    xit('can be instantiated', () => {
        expect(Port()).toBeInstanceOf(Objects);
    })
    xit('Port has a name', () => {
        const port = new Port('Glasgow');

        expect(port.startingPort).toBe('Glasgow');
    })
});
