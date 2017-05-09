const User = require('./User');
const expect = require('chai').expect;

describe('User Test Suite', () => {
  const userName = 'test';
  const role = 'role';
  let user;

  before(() => {
    user = new User(userName, role);
  });

  it('should create an object', () => {
    expect(user).to.be.ok;
  });

  it('should create an object of type User', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should create an object with the specified args', () => {
    expect(user.username).to.equal(userName);
    expect(user.role).to.equal(role);
  });
});