import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.useFakeTimers();

describe('App.jsx', () => {
	it('should include "Hello World" heading', () => {
		const app = shallow(<App />);

		expect(app.contains(<h1>Hello World</h1>)).toEqual(true);
	});
});
