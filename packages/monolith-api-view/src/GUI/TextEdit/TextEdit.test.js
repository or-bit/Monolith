import React from 'react';
import { shallow, render } from 'enzyme';
import TextEdit from './TextEdit';

describe('TextView', () => {
    it('renders without crashing', () => {
        render(<TextEdit text="This is a textView" name="test" />);
    });

    it('should render the TextEdit and change an external var', () => {
        let shouldChange = 'a';
        const onChangeCallback = event => (shouldChange = event.target.value);
        const textEdit = shallow(
            <TextEdit
              name="test"
              text="This is a textEdit"
              onChange={onChangeCallback}
            />,
);
        textEdit.find('textarea').simulate('change', { target: { value: 'TextEdit changed' } });
        expect(shouldChange).toBe('TextEdit changed');
    });
});
