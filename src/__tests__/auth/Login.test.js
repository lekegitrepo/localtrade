import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/auth/Login';

describe('Login Component', () => {
  it('should render Login Component', () => {
    const component = shallow(<Login />);
    expect(component).toMatchSnapshot();
  })
})