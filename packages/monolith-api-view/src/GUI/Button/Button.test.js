import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Unit Test', () => {
    it('should be rendered button label', () => {
        const button = shallow(<Button text="press me!" />);
        button.find('button').simulate('click');
        expect(button.text()).toEqual('press me!');
    });

    it('should call function that changes an external var', () => {
        let change = 'not changed';
        const button = shallow(
            <Button text="press me!" callback={() => (change = 'changed')} />
        );
        button.find('button').simulate('click');
        expect(change).toEqual('changed');
    });
});
