import React from 'react'
import './Header.css'
import logo from '../media/Mrblack-logo.png'
import IconButton from '@material-ui/core/IconButton';
 

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton size='small'><p>About Us</p></IconButton>
                <IconButton size='small'><p>Gallery</p></IconButton>
                <IconButton size='small'><p>Menu</p></IconButton>
            </div>
            <div className='header__center'>
                
                   <img src={logo} alt='Mr Black Logo' />
                
                
            </div>
            <div className='header__right'>
                <IconButton size='small'><p>Offer</p></IconButton>
                <IconButton size='small'><p>Reservation</p></IconButton>
                <IconButton size='small'><p>Contact</p></IconButton>
            </div>
        </div>
    )
}

export default Header
