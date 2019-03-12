import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import TextInputField from '../TextInputField';

describe('Login', () => {
  let wrapper;
  const props = {
    name: 'email',
    label: 'email',
    type: 'text',
    placeholder: 'Email',
    classname: 'form-control form-control-lg',
    icon: 'fas fa-envelope',
  };

  it('Should render a text input field', () => {
    console.log(props);
    wrapper = shallow(<TextInputField {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
