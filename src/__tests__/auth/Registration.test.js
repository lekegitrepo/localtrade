import React from 'react';
import { shallow } from 'enzyme';
import Registration from '../../components/auth/Registration';

describe('Registration Component', () => {
  it('should render Registration Component', () => {
    const component = shallow(<Registration />);
    expect(component).toMatchSnapshot();
  })
})
