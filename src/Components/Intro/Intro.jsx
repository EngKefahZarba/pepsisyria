import React from 'react'
import './Intro.css'
import PepsiLogo from '../../assets/Images/PepsiLogo.png'

function Intro() {
  return (
    <div className="intro-screen">
      <img
        src={PepsiLogo}
        alt="Logo"
        className="intro-logo"
      />
    </div>
  )
}

export default Intro