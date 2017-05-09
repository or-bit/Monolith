import React from 'react';
import { render } from 'enzyme';

import { BarChart, Bar } from './BarChart';

describe('BarChart Test', () => {
    const data = [
        { name: 'food', uv: 400, pv: 2400 },
    ];

    it('Renders 2 bars in simple BarChart', () => {
        const wrapper = render(
            <BarChart width={100} height={50} data={data}>
                <Bar dataKey="uv" fill="#ff7300" />
                <Bar dataKey="pv" fill="#387908" />
            </BarChart>,
        );

        expect(wrapper.find('.recharts-rectangle').length).toEqual(2);
    });
});
