import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../App';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('Welcome to APP', () => {
  it('Should load app', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
