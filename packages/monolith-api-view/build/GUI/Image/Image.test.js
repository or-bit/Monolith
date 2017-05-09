import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe('Image component', () => {
    it('should render correctly', () => {
        const image = shallow(<Image src="test" caption="test" />);
        expect(image.find('figure').length).toEqual(1);
        expect(image.find('img').props().src).toEqual('test');
    });
});
