import React from 'react';
import { shallow } from 'enzyme';

import Error from './GenericError';

describe('Error Unit Test', () => {
    describe('testing with message only', () => {
        it('should render correctly', () => {
            const error = shallow(
                <Error errorMessage="Test" />
            );
            expect(error).toHaveLength(1);
            const errorP = error.find('p');
            const errorPre = error.find('pre');
            expect(errorP).toHaveLength(1);
            expect(errorP.text()).toEqual('Test');
            expect(errorPre).toHaveLength(0);
        });
    });

    describe('testing with message and input', () => {
        it('should render correctly', () => {
            const testObj = {
                ciao: 'ciao',
            };
            const error = shallow(
                <Error errorMessage="Test" input={testObj} />
            );
            expect(error).toHaveLength(1);
            const errorP = error.find('p');
            const errorPre = error.find('pre');
            expect(errorP).toHaveLength(1);
            expect(errorP.text()).toEqual('Test');
            expect(errorPre).toHaveLength(1);
            expect(
              errorPre.render().text()
            ).toEqual(JSON.stringify(testObj, null, Error.jsonIndentation));
        });
    });
});
