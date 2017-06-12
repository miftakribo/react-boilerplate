import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import H3 from './index';

describe('Component: H3', () => {
  const wrapper = shallow(<H3 />);
  it('should render without exploding', () => {
    expect(
      wrapper.length
    ).toEqual(1);
  });

  it('should render its children', () => {
    const children = (<span>test children</span>);
    const renderedComponent = shallow(
      <H3>
        {children}
      </H3>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
