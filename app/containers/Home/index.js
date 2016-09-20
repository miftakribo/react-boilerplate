import React, { Component } from 'react';

import { Link } from 'react-router';

import H3 from '../../components/H3';

export default class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
        nama: 'sam'
      }
  }

  componentWillMount(){
    console.log('hello will');
    setTimeout(() => {
      this.setState({
        nama: 'will'
      });
    }, 2000);

  }
  componentDidMount(){
    console.log('hello bob')
  }
  render() {
    return(
      <div>
        <H3>{this.state.nama}</H3>
        <Link to='/about'>about</Link>
      </div>
    );
  }
}
