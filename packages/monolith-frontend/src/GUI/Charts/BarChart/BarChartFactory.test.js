import React from 'react';
import { render } from 'enzyme';

import BarChartFactory from './BarChartFactory';

describe('BarChartFactory Test Suite', () => {
    const data = [
        { name: 'food', uv: 400, pv: 2400 },
    ];

    it('renders 2 bars in a simple BarChart (all args)', () => {
        const wrapper = render(
            <div>
                {BarChartFactory.createBarChart(
                    data,
                    { width: 200, height: 200 },
                    { xAxisDataKey: 'name', yAxisDataKeys: ['uv', 'pv'] },
                    ['red', 'black'],
                )}
            </div>
        );

        expect(wrapper.find('.recharts-rectangle').length).toEqual(2);
    });

    it('renders 2 bars in a simple BarChart (without colors)', () => {
        const wrapper = render(
            <div>
                {BarChartFactory.createBarChart(
                    data,
                    { width: 0, height: 0 },
                    { xAxisDataKey: 'name', yAxisDataKeys: ['uv', 'pv'] },
                )}
            </div>
        );

        expect(wrapper.find('.recharts-rectangle').length).toEqual(2);
    });

    describe('let\'s make it fail', () => {
        it('should render an Error component (data not an array)', () => {
            const wrapper = render(
                <div>
                    {BarChartFactory.createBarChart(
                        { data: 'fail' },
                        {},
                        { xAxisDataKey: 'name', yAxisDataKeys: ['uv', 'pv'] },
                        ['red', 'black'],
                    )}
                </div>
            );

            expect(wrapper.find('.recharts-rectangle').length).toEqual(0);
            expect(wrapper.find('.monolith-error').length).toEqual(1);
        });

        it('should render an Error component (xAxisDataKey not a string)',
            () => {
                const wrapper = render(
                    <div>
                        {BarChartFactory.createBarChart(
                            data,
                            {},
                            { xAxisDataKey: 2, yAxisDataKeys: ['uv', 'pv'] },
                        )}
                    </div>
                );

                expect(wrapper.find('.recharts-rectangle').length).toEqual(0);
                expect(wrapper.find('.monolith-error').length).toEqual(1);
            });
    });
});
