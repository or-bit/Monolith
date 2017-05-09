const chai = require('chai');
const MongoInMemory = require('mongo-in-memory');
const DataBase = require('./DataBase');

const expect = chai.expect;

describe('DataBase Test Suite', () => {
    let mongoInstance;
    const port = 7777;

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

    it('should connect and insert object', (done) => {
        const db = new DataBase(url);
        db.insertOne(collection, insertedObject).then((data) => {
            expect(data.result.ok).to.equal(1);
            expect(data.insertedCount).to.equal(1);
            const findFunc = object => object.name === 'test';
            expect(data.ops.find(findFunc)).to.equal(insertedObject);
            done();
        }).catch(error => done(error));
    });

    it('should contain an object with name = "test"', (done) => {
        const db = new DataBase(url);
        db.findOne(collection, { name: 'test' }).then((output) => {
            expect(output.name).to.equal(insertedObject.name);
            done();
        }).catch(error => done(error));
    });
});
