const chai = require('chai');
const MongoInMemory = require('mongo-in-memory');
const chaiAsPromised = require('chai-as-promised');
const DataBase = require('./DataBase');

chai.use(chaiAsPromised);

const expect = chai.expect;
const should = chai.should();

describe('DataBase Test Suite', () => {
  let mongoInstance;
  const port = 7777;

  describe('testing with a valid db connection', () => {
    before((done) => {
      mongoInstance = new MongoInMemory(port);
      mongoInstance.start((error) => {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
    });

    after((done) => {
      mongoInstance.stop((error) => {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
    });

    const collection = 'test';
    const insertedObject = {
      id: 0,
      name: 'test',
    };
    const url = `mongodb://localhost:${port}`;

    it('should have the correct mongoUrl field', () => {
      const db = new DataBase(url);
      expect(db.mongourl).to.equal(url);
    });

    describe('when working with the actual data', () => {
      const db = new DataBase(url);
      describe('inserting objects', () => {
        it('should connect and insert object', (done) => {
          db.insertOne(collection, insertedObject).then((data) => {
            expect(data.result.ok).to.equal(1);
            expect(data.insertedCount).to.equal(1);
            const findFunc = object => object.name === 'test';
            expect(
              data.ops.find(findFunc)
            ).to.equal(insertedObject);
            done();
          }).catch(error => done(error));
        });
        it('should fail if we try to insert the same object', () => {
          return db.insertOne(collection, insertedObject).should.be.rejected;
        });
      });

      describe('querying the db', () => {
        it('should contain an object with name = "test"', (done) => {
          db.findOne(collection, { name: 'test' }).then((output) => {
            expect(output.name).to.equal(insertedObject.name);
            done();
          }).catch(error => done(error));
        });
          /* eslint-disable max-len */
        it('should NOT contain an object with name = "not a test"', () => {
          return db.findOne(
            collection, { name: 'not a test' }
          ).should.eventually.deep.equal(null);
        });
      });

      describe('updating existing value', () => {
        it('should update the object with name = "test"', () => {
          const objectToFind = { name: 'test' };
          const objectReplacement = { $set: { name: 'test2' }};
          expect(
            db.updateOne(collection, objectToFind, objectReplacement)
          ).to.eventually.be.resolved;
        });
          /* eslint-disable max-len */
        it('should fail attempting to update a non existing object', () => {
          return expect(
            db.updateOne(collection, { name: 'not a test' }, {})
          ).to.eventually.be.equal(undefined);
        });
      });
    });
  });

  describe('testing without db connection', () => {
    const db = new DataBase('mongodb://fake');
    it('data fetch should fail because of lack of connection', () => {
      expect(
        db.findOne('collection', { name: 'test' })
      ).to.eventually.throw(Error);
    });
    it('data insertion should fail because of lack of connection', () => {
      expect(
        db.insertOne('collection', { name: 'not a test' })
      ).to.eventually.throw(Error);
    });
  });
});
