import React from 'react';
import { shallow, render } from 'enzyme';
import TextEdit from './TextEdit';

describe('TextEdit', () => {
    it('renders without crashing', () => {
        render(<TextEdit text="This is a TextEdit" name="test" />);
    });

    it('should render the TextEdit and react to input change', () => {
        const textEdit = shallow(<TextEdit name="test" />);
        textEdit.find('textarea').simulate(
          'change',
          { target: { value: 'TextEdit changed' } }
        );
        expect(
          textEdit.find('textarea').props().value
        ).toEqual('TextEdit changed');
    });

    it('should render the TextEdit and change an external var', () => {
        let shouldChange = 'a';
        const onChangeCallback = event => (shouldChange = event.target.value);
        const textEdit = shallow(
            <TextEdit
              name="test"
              text="This is a textEdit"
              onTextChange={(value, event) => {
                  onChangeCallback(event);
              }}
            />,
);
        textEdit.find('textarea').simulate(
          'change',
          { target: { value: 'TextEdit changed' } }
        );
        expect(shouldChange).toBe('TextEdit changed');
    });
});
