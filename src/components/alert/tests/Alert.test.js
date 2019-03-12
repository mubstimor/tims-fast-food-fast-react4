import React from 'react';
import axios from 'axios';
import Alert from '../Alert';
import expect from 'expect';
import { shallow } from 'enzyme';

describe('Test Alert', () => {
  const props = {
    children: '',
    className: '',
  };

  it('should render corrently', () => {
    const alertWrapper = shallow(<Alert {...props} />);
    const component = alertWrapper;
    expect(component).toMatchSnapshot();
  });
});
