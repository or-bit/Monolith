const expect = require('chai').expect;
const RouteObject = require('./RouteObject');

describe('RouteObject Test Suite', () => {
    const expectedRoute = {
        user: '(.)*(admin)$',
        command: '$admin',
        route: 'admin',
    };
    describe('when creating RouteObject instance', () => {
        it('should be ok', () => {
            const route = new RouteObject(expectedRoute);
            expect(route.getCommand()).to.deep.equal(expectedRoute.command);
            expect(route.getRoute()).to.deep.equal(expectedRoute.route);
            expect(route.getUser()).to.deep.equal(expectedRoute.user);
        });
    });
    describe('when serializing route instance', () => {
        it('should return the expected result', () => {
            const route = new RouteObject(expectedRoute);
            let expectedSerializedObject = [
                '"$admin": {',
                '  "user": "(.)*(admin)$",',
                '  "route": "admin",',
                '}',
            ].join('\n');

            expect(route.serialize()).to.deep.equal(expectedSerializedObject);

            expectedSerializedObject = [
                ' "$admin": {',
                '   "user": "(.)*(admin)$",',
                '   "route": "admin",',
                ' }',
            ].join('\n');

            expect(route.serialize(' '))
              .to.deep.equal(expectedSerializedObject);
        });
    });
});
