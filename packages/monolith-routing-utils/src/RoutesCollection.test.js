const expect = require('chai').expect;
const RoutesCollection = require('./RoutesCollection');

describe('RoutesCollection Test Suite', () => {
    const route = {
        user: '(.)*(admin)$',
        command: '$admin',
        route: 'admin',
        operandType: 'LIKE',
        serialize: () => [
            '"$admin": {',
            '  "user": "(.)*(admin)$",',
            '  "route": "admin",',
            '}',
        ].join('\n'),
    };
    describe('when creating RoutesCollection instance', () => {
        it('should be empty', () => {
            const collection = new RoutesCollection();
            expect(collection.size()).to.equal(0);
        });
    });
    describe('when adding route instance', () => {
        it('should return the collection instance', () => {
            const collection = new RoutesCollection();
            expect(collection.add(route)).to.deep.equal(collection);
            expect(collection.size()).to.equal(1);
            expect(collection.get(0)).to.deep.equal(route);
        });
    });
    describe('when getting route from empty collection', () => {
        it('should throw an Error', () => {
            const collection = new RoutesCollection();
            expect(() => collection.get(0)).to.throw();
        });
    });
    describe('when clearing collection', () => {
        it('should result in an empty collection', () => {
            const collection = new RoutesCollection();
            expect(
        collection.add(route).clear().size()
      ).to.equal(0);
        });
    });
    describe('when removing route instance', () => {
        describe('when index is in range', () => {
            it('should remove an object', () => {
                const collection = new RoutesCollection();
                expect(
          collection.add(route).remove(0).size()
        ).to.equal(0);
            });
        });
        describe('when index is not in range', () => {
            it('should remove an object', () => {
                const collection = new RoutesCollection();
                expect(
            collection.add(route).remove(2).size()
          ).to.equal(1);
            });
        });
    });
    describe('when serializing collection', () => {
        it('should return as expected', () => {
            const expectedSerializedCollection = [
                '{',
                `${route.serialize()},`,
                '  }',
            ].join('\n');

            console.log(expectedSerializedCollection);

            const collection = new RoutesCollection();
            expect(
        collection.add(route).serialize()
      ).to.deep.equal(expectedSerializedCollection);
        });
    });
});
