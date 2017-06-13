import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <h1>header</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
    </header>
  );
}

export default Header;
