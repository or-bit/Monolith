import React from 'react';
import { shallow } from 'enzyme';

import RadioButtonGroup from './RadioButtonGroup';

describe('RadioButtonGroup Unit Test', () => {
    const buttons = [
        {
            value: 'A',
            label: 'A',
            checked: true,
        },
        {
            value: 'B',
            label: 'B',
        },
        {
            value: 'C',
            label: 'C',
        },
    ];

    it('should render correctly', () => {
        const radio = shallow(
            <RadioButtonGroup buttons={buttons} groupName="test" />,
        );
        expect(radio.children().length).toEqual(buttons.length);
    });

    it('should change state', () => {
        const radio = shallow(
            <RadioButtonGroup buttons={buttons} groupName="test" />,
        );

        const initialState = radio.state('selected');

        const CRadioButton = radio.find({ value: 'C' });

        CRadioButton.simulate('change', 'C');

        expect(radio.state('selected')).not.toEqual(initialState);
    });
});
