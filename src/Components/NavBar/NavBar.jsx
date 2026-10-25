import React from 'react'
import './NavBar.css'
import PepsiLogo from '../../assets/Images/PepsiLogo.png'
function NavBar() {
  return (
   <nav className='Navbar'>
    <div className='Logo'>
        <img src={PepsiLogo} alt="" />
        <h2>Pepsi Syria</h2>
    </div>
    <div className='Menu-buttton'>
        <ul className='Menu'>
            <li>Home</li>
            <li>About Us</li>
            <li>Brands</li>
            <li>Media & Events</li>
            <li>Careers</li>
            <li>Contact Us</li>
        </ul>
        <button>EN / AR</button>
    </div>
   </nav>
  )
}

export default NavBar