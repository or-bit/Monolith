import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';

describe('RadioButton Unit Test', () => {
    it('should render correctly', () => {
        const radio = shallow(
            <RadioButton
              name="test"
              label="test"
              value="test"
              groupName={'testGroup'}
              onChangeCallback={() => console.log('test')}
            />,
        );
        expect(radio.text()).toEqual('test');
        const radioButtonId = RadioButton.idGenerator('test');
        expect(radio.find(`#${radioButtonId}`).length).toEqual(1);
        expect(
          radio.find(`#${radioButtonId}`).props().defaultChecked
        ).toEqual(undefined);
    });
    it('should render correctly even when no callback is passed', () => {
        const radio = shallow(
            <RadioButton
              name="test"
              label="test"
              value="test"
              groupName={'testGroup'}
            />,
        );
        expect(radio.text()).toEqual('test');
        radio.find('input').simulate('change');
        const radioButtonId = RadioButton.idGenerator('test');
        expect(radio.find(`#${radioButtonId}`).length).toEqual(1);
        expect(
          radio.find(`#${radioButtonId}`).props().defaultChecked
        ).toEqual(undefined);
    });
    it('should render a checked button', () => {
        const radio = shallow(
            <RadioButton
              name="test"
              label="test"
              value="test"
              groupName={'testGroup'}
              checked
              onChangeCallback={() => console.log('test')}
            />,
        );
        expect(radio.text()).toEqual('test');
        const radioButtonId = RadioButton.idGenerator('test');
        expect(
          radio.find(`#${radioButtonId}`).props().defaultChecked
        ).toEqual(true);
    });
    it('should change state', () => {
        let toChange = 'toChange';

        const radio = shallow(
            <RadioButton
              name="test"
              label="test"
              value="test"
              groupName={'testGroup'}
              onChangeCallback={() => (toChange = 'changed')}
            />,
        );

        radio.find('input').simulate('change');
        expect(toChange).toEqual('changed');
    });
});
