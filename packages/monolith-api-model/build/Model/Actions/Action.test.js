const chai = require('chai');
const Action = require('./Action');

const assert = chai.assert;
const expect = chai.expect;

describe('Action tests suite', () => {
    const actionType = 'testAction';
    const actionData = 5;

    it('should return an Action instance (single arg constructor)', () => {
        const action = new Action({ type: actionType, payload: actionData });
        const expectedAction = { type: actionType, payload: actionData };
        assert.isDefined(action);
        assert.deepEqual(action, expectedAction);
    });

    it('should return an Action instance (static create method)', () => {
        const action = Action.create(actionType, actionData);
        const expectedAction = { type: actionType, payload: actionData };
        assert.isDefined(action);
        assert.deepEqual(action, expectedAction);
    });

    it('should return the action without the Action type', () => {
        const action = Action.create(actionType, actionData);
        expect(action.asPlainObject()).to.not.be.instanceof(Action);
    });
});