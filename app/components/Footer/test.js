import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Component: Footer', () => {
  const wrapper = shallow(<Footer />);
  it('render <Footer /> Component', () => {
    expect(wrapper.length).toEqual(1);
  })
})
