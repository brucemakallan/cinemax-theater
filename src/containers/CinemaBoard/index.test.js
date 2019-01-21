import React from 'react';
import { mount } from 'enzyme';
import CinemaBoard from '.';

describe('Test suite for <CinemaBoard />', () => {
	it('should render correctly', () => {
		const wrapper = mount(<CinemaBoard />);
		expect(wrapper).toMatchSnapshot();
	});
});
