import React from 'react';
import { shallow } from 'enzyme';

import CheckBox from './CheckBox';

describe('RadioButton Unit Test', () => {
    it('should render correctly', () => {
        const check = shallow(<CheckBox name="test" label="test" />);
        expect(check.text()).toEqual('test');
        expect(check.find('input').props().checked).toEqual(false);
    });
    it('should change state', () => {
        const check = shallow(<CheckBox name="test" value="test" />);
        check.find('input').simulate('click');
        expect(check.find('input').props().checked).toEqual(true);
    });
});
