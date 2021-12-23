import React from 'react';
import "./header.css";

function Header() {
  return(
    <div className='header_nav'>
      <div className='header_name'>
        SportyGuru
      </div>

      <div className='header_links'>
        <li className='header_list'>Home</li>
        <li className='header_list'>About</li>
        <li className='header_list'>Contact</li>
      </div>
      

    </div>
  )
  
}

export default Header;