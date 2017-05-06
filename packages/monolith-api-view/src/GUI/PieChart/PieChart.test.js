import React from 'react';
import { render } from 'enzyme';

import { PieChart, Pie } from './PieChart';

describe('PieChart test', () => {
    const data = [
        { name: 'Apple', value: 400 },
        { name: 'Banana', value: 300 },
        { name: 'Cherry', value: 300 },
    ];

    it('should renders 3 sectors circles in simple PieChart', () => {
        const wrapper = render(
            <PieChart width={800} height={400}>
                <Pie
                  isAnimationActive={false}
                  data={data}
                  cx={200}
                  cy={200}
                  outerRadius={80}
                  fill="#ff7300"
                  label
                />
            </PieChart>,
            );

        expect(wrapper.find('.recharts-pie-sector').length).toEqual(data.length);
    });
});
