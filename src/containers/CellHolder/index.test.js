import React from 'react';
import { mount } from 'enzyme';
import CellHolder from '.';

describe('Test suite for <CellHolder />', () => {
	let props;

	beforeEach(() => {
		props = {
			value: '*',
			type: 'normal',
			id: 'A1'
		};
	});

	it('should render correctly', () => {
		const wrapper = mount(<CellHolder {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
