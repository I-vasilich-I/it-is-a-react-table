import React from 'react';
import Search from '../Search/Search';
import Select from '../Select/Select';
import './Navbar.scss';

function Navbar():JSX.Element {
  return (
    <nav className="navbar">
      <Search />
      <Select /> 
    </nav>
  );
}

export default Navbar;