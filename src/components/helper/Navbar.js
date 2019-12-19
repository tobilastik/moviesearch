import React from 'react';
import logo from '../../../src/logo.png';

function Navbar () {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <div className="navbar-header">
            <img
              src={logo}
              alt="Logo"
              style={{height: '100px', width: '250px'}}
            />
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
