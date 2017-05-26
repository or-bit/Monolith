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
            // the first selected element "wins"
            expect(
              select.props().value
            ).toEqual(listValues[1].optionValue);
        });
    });

    describe('when changing selection', () => {
        it('should update accordingly', () => {
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
            ];
            const list = mount(
                <DropDownList values={listValues} />
            );
            const select = list.find('select');
            expect(
              select.props().value
            ).toEqual(listValues[1].optionValue);

            select.simulate('change', { target: { value: 'ananas' } });
            list.update();
            expect(
              select.props().value
            ).toEqual(listValues[0].optionValue);
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
