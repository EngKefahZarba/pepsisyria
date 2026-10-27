import React, { useState } from 'react'
import './NavBar.css'
import PepsiLogo from '../../assets/Images/PepsiLogo.png'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className="Navbar"
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          closeMenu()
          event.currentTarget
            .querySelector('.Menu-toggle')
            ?.focus()
        }
      }}
    >
      <a className="Logo" href="#home" onClick={closeMenu}>
        <img src={PepsiLogo} alt="" />
        <h2>Pepsi Syria</h2>
      </a>

      <button
        className={`Menu-toggle ${isOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="navbar-menu"
        className={`Menu-buttton ${isOpen ? 'is-open' : ''}`}
      >
        <ul className="Menu">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#brands" onClick={closeMenu}>Brands</a></li>
          <li>
            <a href="#media" onClick={closeMenu}>Media & Events</a>
          </li>
          <li><a href="#careers" onClick={closeMenu}>Careers</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>

        <button className="Language-button" type="button">EN / AR</button>
      </div>
    </nav>
  )
}

export default NavBar