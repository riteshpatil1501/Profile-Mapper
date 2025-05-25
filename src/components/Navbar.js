import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      padding: '10px 20px',
      backgroundColor: '#282c34',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Profile Mapper</div>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Home
        </Link>
        <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
          Admin Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

