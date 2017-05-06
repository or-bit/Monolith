import React from 'react';
import { shallow } from 'enzyme';

import CheckBoxGroup from './CheckBoxGroup';

describe('CheckBoxGroup Unit Test', () => {
    it('should render correctly', () => {
        const buttons = [
            {
                name: 'test1',
                value: 'test1',
                label: 'test1',
                checked: true,
            },
            {
                name: 'test2',
                value: 'test2',
                label: 'test2',
            },
        ];
        const checkGroup = shallow(<CheckBoxGroup name="test" label="test" buttons={buttons} />);
        const check = checkGroup.find('CheckBox');
        expect(check.length).toEqual(2);
        expect(check.first().props().value).toEqual('test1');
        expect(check.first().props().checked).toEqual(true);
    });
});
