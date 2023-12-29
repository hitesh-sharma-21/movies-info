import React from 'react';
import Logo from '../../assests/OIP.jpg'
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
function Header() {
  return (
    <>
      <nav className='header'>
        <img src={Logo} alt="" />
        <div>
          <Link >Tv shows</Link>
          <Link >Movies</Link>
          <Link >Recently added</Link>
          <Link >My list</Link>
        </div>
        <ImSearch />
      </nav>
    </>
  )
}

export default Header