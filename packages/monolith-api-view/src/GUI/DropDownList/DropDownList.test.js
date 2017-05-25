import React from 'react';
import { mount, shallow } from 'enzyme';

import DropDownList from './DropDownList';

describe('DropDownList Unit Test', () => {
    describe('when data is entered correctly', () => {
        const listValues = [
            {
                label: 'Ananas',
                optionValue: 'ananas',
            },
            {
                label: 'Banana',
                optionValue: 'banana',
                selected: true,
            },
            {
                label: 'Cherry',
                optionValue: 'cherry',
                selected: true,
            },
            {
                label: 'Date',
                optionValue: 'date',
            },
        ];

        it('should render accordingly', () => {
            const list = shallow(
                <DropDownList values={listValues} />
            );
            const select = list.find('select');
            expect(select).toHaveLength(1);
            const options = select.children();
            expect(options).toHaveLength(4);
            expect(select.childAt(2).props().selected).toEqual(true);
        });
    });
    describe('when data contains duplicated entries', () => {
        const listValues = [
            {
                label: 'Ananas',
                optionValue: 'ananas',
            },
            {
                label: 'Banana',
                optionValue: 'banana',
                selected: true,
            },
            {
                label: 'Cherry',
                optionValue: 'banana',
                selected: true,
            },
            {
                label: 'Date',
                optionValue: 'date',
            },
        ];

        it('should render error message', () => {
            const list = mount(
                <DropDownList values={listValues} />
            );
            expect(list.find('.monolith-error')).toHaveLength(1);
        });
    });
});
