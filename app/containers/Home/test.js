import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import Home from './index'

// import proxyquire from 'proxyquire'
// import mockrequire from 'mock-require'
//
// before(() => {
//   mockrequire('components/H3','../../components/H3')
// })
// let app
// beforeEach(() => {
//   app = proxyquire('./index', {})
// })

describe('Container: Home', () => {
  const wrapper= shallow(<Home />)
  it('should render without exploding', () => {
    expect(
      wrapper.length
    ).toEqual(1)
  })
})
