import React from 'react';
import { shallow } from 'enzyme';
import gui from './GUI';

class DummyReactComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Hello world!',
        };
    }
    render() {
        if (!this.state.text) {
            return null;
        }
        return (<div>{this.state.text}</div>);
    }
}

describe('GUI Test Suite', () => {
    it('should render', () => {
        const DummyHOC = gui(DummyReactComponent);

        const dummyHOC = shallow(<DummyHOC />);
        const dummyHOCInstance = dummyHOC.instance();
        expect(dummyHOCInstance).toBeInstanceOf(DummyHOC);
        const dummyReactShallowComponent = dummyHOC.dive();
        const dummyReactComponentInstance = dummyReactShallowComponent.instance();
        expect(dummyReactComponentInstance).toBeInstanceOf(DummyReactComponent);
        expect(dummyReactShallowComponent.text()).toEqual('Hello world!');
    });
});
