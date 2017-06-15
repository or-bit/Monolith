import sinon from 'sinon';
import WebNotification from './WebNotification';

class MockNotification {
    constructor(...args) {
        this.foo(args);
    }

    foo() { this.bar = 'bar'; }
}

describe('WebNotification Test Suite', () => {
    describe('testing notification construction', () => {
        it('WebNotification should construct expected object', () => {
            const expectedObject = {
                title: 'title',
                body: 'body',
                iconUrl: 'icon',
            };
            const notification = new WebNotification('title', 'body', 'icon');
            expect(notification).toEqual(expectedObject);
        });
    });
    describe('testing methods', () => {
        describe('#notify', () => {
            beforeAll(() => {
                global.Notification = MockNotification;
                Notification.requestPermission = () => {};
            });

            afterAll(() => {
                delete global.Notification;
            });

            it('should request for permission and receive grants', () => {
                Notification.permission = 'denied';
                const stub = sinon.stub(Notification, 'requestPermission')
                    .resolves('granted');
                new WebNotification().notify();
                sinon.assert.calledOnce(stub);
                Notification.requestPermission.restore();
            });

            it('should request for permission but not receiving grants', () => {
                Notification.permission = 'denied';
                const stub = sinon.stub(Notification, 'requestPermission')
                    .resolves('denied');
                new WebNotification().notify();
                sinon.assert.calledOnce(stub);
                Notification.requestPermission.restore();
            });

            it('should invoke notification', () => {
                Notification.permission = 'granted';
                const spy = sinon.spy(Notification.prototype, 'foo');
                new WebNotification().notify();
                sinon.assert.calledOnce(spy);
            });
        });
    });
});
