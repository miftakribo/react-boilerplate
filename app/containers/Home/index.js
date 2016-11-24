import React, { Component } from 'react';

import { Link } from 'react-router';

import H3 from 'components/H3';

export default class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
        name: 'sam'
      }
  }

  componentWillMount(){
  }
  componentDidMount(){
    console.log('hello bob')
  }
  render() {
    return(
      <div>
        <H3>HOME</H3>
        <p>hello this is {this.state.name}</p>
      </div>
    );
  }
}
