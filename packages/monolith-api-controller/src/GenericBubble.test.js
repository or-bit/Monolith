import React from 'react';
import { shallow } from 'enzyme';
import GenericBubble from './GenericBubble';

class TestGenericBubble extends GenericBubble {
    aliveRender() {
        return (<a href="url">test link</a>);
    }

    notAliveRender() {
        return (<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="test" />);
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
        const component = shallow(<TestGenericBubble time={5}/>);
        expect(component.text()).toEqual('test link');
        component.setState({alive: false}, () => {
          component.update();
          expect(component.text()).toEqual('');
        });
    });
});
