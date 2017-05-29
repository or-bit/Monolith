import React from 'react';
import { shallow } from 'enzyme';

import GUIContainer from './GUIContainer';

describe('GUIContainer Test Suite', () => {
    it('should render', () => {
        const childText = 'Some text';
        const childTextComponent = () => (
            <div>{childText}</div>
           );

        const childButtonText = 'a button';
        const childButtonComponent = () => (
            <div>
                <p>{childButtonText}</p>
            </div>
           );
        const GUIContainerShallow = shallow(
            <GUIContainer>
                {childButtonComponent()}
                {childTextComponent()}
            </GUIContainer>,
);
        const expectedText = `${childButtonText}${childText}`;
        expect(GUIContainerShallow.text()).toEqual(expectedText);
        expect(GUIContainerShallow.length).toEqual(1);
        expect(GUIContainerShallow.find('div').length).toEqual(2 + 1);
        expect(GUIContainerShallow.children().length).toEqual(2);
    });
});
