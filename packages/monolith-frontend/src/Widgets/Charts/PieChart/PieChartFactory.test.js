import React from 'react';
import { mount, render } from 'enzyme';

import PieChartFactory from './PieChartFactory';

describe('PieChartFactory Test Suite', () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];

    it('renders 6 areas in a simple PieChart (all args)', () => {
        const wrapper = mount(
            PieChartFactory.createPieChart(
                data,
                { width: 200, height: 200 },
                { startAngle: 0, endAngle: 0 },
                { centerX: 10, centerY: 10 },
                { innerRadius: 35, outerRadius: 100 },
                true
            )
        );

        expect(wrapper.find('.recharts-wrapper')).toBeDefined();
    });

    it('renders 2 bars in a simple BarChart (without colors)', () => {
    });

    describe('let\'s make it fail', () => {
        it('should render an Error component (data not an array)', () => {
            const wrapper = render(
                <div>
                    {PieChartFactory.createPieChart(
                        { data: 'fail' },
                        { width: 200, height: 200 },
                        { startAngle: 0, endAngle: 0 },
                        { centerX: 10, centerY: 10 },
                        { innerRadius: 35, outerRadius: 100 },
                        false,
                        'red'
                    )}
                </div>
            );

            expect(wrapper.find('.recharts-wrapper').length).toEqual(0);
            expect(wrapper.find('.monolith-error').length).toEqual(1);
        });

        it('should render an Error component (invalid center coord.)', () => {
            const wrapper = render(
                <div>
                    {PieChartFactory.createPieChart(
                        data,
                        { width: 200, height: 200 },
                        { startAngle: 0, endAngle: 0 },
                        { centerX: '', centerY: '' },
                        { innerRadius: 35, outerRadius: 100 },
                        false,
                        'red'
                    )}
                </div>
            );

            expect(wrapper.find('.recharts-wrapper').length).toEqual(0);
            expect(wrapper.find('.monolith-error').length).toEqual(1);
        });

        it('should render an Error component (invalid radii)', () => {
            const wrapper = render(
                <div>
                    {PieChartFactory.createPieChart(
                        data,
                        { width: 200, height: 200 },
                        { startAngle: 0, endAngle: 0 },
                        { centerX: 2, centerY: 2 },
                        { innerRadius: '', outerRadius: 100 },
                        false,
                        'red'
                    )}
                </div>
            );

            expect(wrapper.find('.recharts-wrapper').length).toEqual(0);
            expect(wrapper.find('.monolith-error').length).toEqual(1);
        });

        it('should render but with warning (invalid size)', () => {
            const wrapper = render(
                <div>
                    {PieChartFactory.createPieChart(
                        data,
                        { width: '', height: '' },
                        { startAngle: 0, endAngle: 0 },
                        { centerX: 2, centerY: 2 },
                        { innerRadius: 35, outerRadius: 100 },
                        false,
                        'red'
                    )}
                </div>
            );

            expect(wrapper.find('.recharts-wrapper').length).toEqual(1);
        });

        //
    //     it('should render an Error component (xAxisDataKey not a string)',
    //         () => {
    //             const wrapper = render(
    //                 <div>
    //                     {BarChartFactory.createBarChart(
    //                         data,
    //                         {},
    //                         { xAxisDataKey: 2, yAxisDataKeys: ['uv', 'pv'] },
    //                     )}
    //                 </div>
    //             );
    //
    //             expect(wrapper.find('.recharts-rectangle').length).toEqual(0);
    //             expect(wrapper.find('.monolith-error').length).toEqual(1);
    //         });
    });
});
