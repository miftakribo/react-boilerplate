import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import About from './index'

describe('Container: Layout', () => {
  const wrapper= shallow(<Layout />)
  it('should render without exploding', () => {
    expect(
      wrapper.length
    ).toEqual(1)
  })
})
