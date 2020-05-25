import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../../jest.setup'

const app = shallow(<App />);

it("renders correctly", () => { 
    expect(app).toMatchSnapshot();
});