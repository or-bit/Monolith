import React from 'react';
import { shallow, mount } from 'enzyme';

import InputText from './InputText';

describe('InputText', () => {
    it('should contain an input tag', () => {
        const component = shallow(<InputText id={'myId'} value={'myvalue'} />);
        expect(component.find('input').length).toEqual(1);
    });

    it('should have id', () => {
        const component = mount(<InputText id={'myid'} value={'myvalue'} />);
        expect(component.props().id).toEqual('myid');
    });

    it('should have value', () => {
        const component = mount(<InputText id={'myid'} value={'myvalue'} />);
        expect(component.props().value).toEqual('myvalue');
    });

    it('should be able to change its value', () => {
        const component = mount(<InputText id="myId" />);
        expect(component.find('input').props().value).toEqual('');
        component.find('input').simulate(
          'change',
          { target: { value: 'test' } }
        );
        expect(component.find('input').props().value).toEqual('test');
    });
});
