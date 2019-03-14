import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { CustomerHome } from '../CustomerHome';

describe('Customer Home functionality', () => {
  const props = {
    onSubmit: jest.fn(),
    fetchMenu: jest.fn(),
    menu: [{ category: 'Food', id: 1, name: 'Chips + Chicken', price: 15000 }],
    loading: false,
    error: false,
  };
  const state = {
    selectedItem: {},
  };
  const wrapper = shallow(<CustomerHome {...props} />);
  wrapper.setState(state);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loading div', () => {
    const props = {
      onSubmit: jest.fn(),
      fetchMenu: jest.fn(),
      menu: [],
      loading: true,
      error: false,
    };
    const wrapper = shallow(<CustomerHome {...props} />);
    const div = wrapper.find('.alert-primary');
    expect(div.length).toBe(1);
  });

  it('should render error div', () => {
    const props = {
      onSubmit: jest.fn(),
      fetchMenu: jest.fn(),
      menu: [],
      loading: false,
      error: true,
    };
    const wrapper = shallow(<CustomerHome {...props} />);
    const div = wrapper.find('.alert-warning');
    expect(div.length).toBe(1);
  });

  it('should handleClick', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        id: 1,
      },
    };
    wrapper.instance().handleClick(event);
    expect(wrapper.instance().state.selectedItem).toEqual(props.menu[0]);
  });
});
