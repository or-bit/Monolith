import React from 'react';
import { shallow } from 'enzyme';
import { createServer } from 'http';
import serverIo from 'socket.io';
import consts from 'monolith-consts';
import GenericBubble from './GenericBubble';

class TestGenericBubble extends GenericBubble {
    aliveRender() {
        console.log(this.state);
        return (<a href="url">test link</a>);
    }

    notAliveRender() {
        console.log(this.state);
        return (
            <img
              src="https://www.w3schools.com/images/w3schools_green.jpg"
              alt="test"
            />
        );
    }
}

describe('GenericBubble Test Suite', () => {
    it('should be valid React component', () => {
        const wrapper = shallow(<TestGenericBubble />);
        const rendered = wrapper.find('a');

        expect(wrapper.text()).toEqual('test link');
        expect(rendered.prop('href')).toEqual('url');
    });
    it('should switch rendered elements if bubble gets toggled', () => {
        const component = shallow(<TestGenericBubble time={5} />);
        expect(component.text()).toEqual('test link');
        component.setState({ alive: false }, () => {
            component.update();
            expect(component.text()).toEqual('');
        });
    });

    describe('testing bubble\'s lifecycle', () => {
        const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        let app;
        let serverSocket;
        const port = 6543;

        beforeEach(() => {
            // 10 second timeout
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            app = createServer();
            app.listen(port);
            serverSocket = serverIo(app).of(consts.BUBBLE_ROOM);
        });

        afterEach(() => {
            app.close();

            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

        it('should trigger lifecycled rendering', (done) => {
            const url = `http://localhost:${port}`;
            const component = shallow(<TestGenericBubble url={url} time={5} />);
            serverSocket.on('connection', (clientSocket) => {
                clientSocket.on(consts.LIFECYCLE_EVENT, (data) => {
                    expect(data).toEqual(5);
                    clientSocket.emit(consts.LIFECYCLE_EVENT_DONE);
                    setTimeout(() => {
                        expect(component.text()).toEqual('');
                        done();
                    }, 100);
                });
            });
        });

        it('should not trigger lifecycled rendering due to server error',
            (done) => {
                const url = `http://localhost:${port}`;
                const component = shallow(
                    <TestGenericBubble url={url} time={5} />
                );
                serverSocket.on('connection', (clientSocket) => {
                    clientSocket.on(consts.LIFECYCLE_EVENT, (data) => {
                        expect(data).toEqual(5);
                        clientSocket.emit(consts.LIFECYCLE_EVENT_FAILED);
                        setTimeout(() => {
                            expect(component.text()).toEqual('test link');
                            done();
                        }, 100);
                    });
                });
            }
        );
    });
});
