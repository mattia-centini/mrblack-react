import React from 'react'
import './Header.css'
import logo from '../media/Mrblack-logo.png'

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <p>About Us</p>
                <p>Gallery</p>
                <p>Menu</p>
            </div>
            <div className='header__center'>
                <img src={logo} alt='Mr Black Logo' />
            </div>
            <div className='header__right'>
                <p>Offer</p>
                <p>Reservation</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Header
