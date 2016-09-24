import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class Layout extends Component {
  render(){
    return(
      <div>
        <Header />
        <div class='container'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
