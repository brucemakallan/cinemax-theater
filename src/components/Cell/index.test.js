import React from 'react';
import { mount } from 'enzyme';
import Cell from '.';

describe('Test suite for <Cell /> component', () => {
	let props;

	beforeEach(() => {
		props = {
			value: '*',
			type: 'normal',
			id: 'A1',
			onClick: jest.fn()
		};
	});

	it('should render correctly', () => {
		const wrapper = mount(<Cell {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
