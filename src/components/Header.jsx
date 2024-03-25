import React from 'react'
import './Header.css'
import Logo from '../img/Bitphonelogo.png'

const Header = () => {
  return (
    <div className='Main'> 
        <div className="Header">
            <img src={Logo} alt="Logo Black Jack" />
        </div>
    </div>
  )
}

export default Header