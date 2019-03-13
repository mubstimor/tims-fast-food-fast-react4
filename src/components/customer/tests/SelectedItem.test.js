import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SelectedItem from '../SelectedItem';

describe('SelectedItem', () => {
  let wrapper;

  it('Should render a selected item view', () => {
    wrapper = shallow(<SelectedItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
