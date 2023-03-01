import React from 'react';

import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
    <>
       
        <nav>
        <div className='hero'>
          <h2 class="clogo"> Pet <span>Heaven</span></h2>
                <ul> 
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/signup'>Sign up as Volunteer</Link></li>
                <li><Link to='/adoptiongallery'> Our Little Pet Gallery</Link></li>
                <li><Link to='/adoptionform'> Adopt A Pet Now!</Link></li>
                <li><Link to='/releaseform'> Release Pet</Link></li>
        </ul>        </div>
        </nav>
        <header>
          <div className='logo'>
            <img src='petlogo.png' alt='' />
          </div>

        </header>
    </>
    )
}

export default NavBar
