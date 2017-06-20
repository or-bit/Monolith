import React from 'react';
import { shallow } from 'enzyme';

import WidgetsContainer from './WidgetsContainer';

describe('WidgetsContainer Test Suite', () => {
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
            <WidgetsContainer>
                {childButtonComponent()}
                {childTextComponent()}
            </WidgetsContainer>,
);
        const expectedText = `${childButtonText}${childText}`;
        expect(GUIContainerShallow.text()).toEqual(expectedText);
        expect(GUIContainerShallow.length).toEqual(1);
        expect(GUIContainerShallow.find('div').length).toEqual(2 + 1);
        expect(GUIContainerShallow.children().length).toEqual(2);
    });
});
