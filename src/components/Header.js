import React from 'react'
import './Header.css'
import logo from '../media/Mrblack-logo.png'
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
 

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton size='small'><Link to='/about'><p>About Us</p></Link></IconButton>
                <IconButton size='small'><Link to='/gallery'><p>Gallery</p></Link></IconButton>
                <IconButton size='small'><Link tp='/menu'><p>Menu</p></Link></IconButton>
            </div>
            <div className='header__center'>
                <Link to='/'>
                     <img src={logo} alt='Mr Black Logo' />
                 </Link>
                   
                
                
            </div>
            <div className='header__right'>

                <IconButton size='small'><Link to='/offer'><p>Offer</p></Link></IconButton>
                <IconButton size='small'><Link to='/reservation'><p>Reservation</p></Link></IconButton>
                <IconButton size='small'><Link to='/contact'><p>Contact</p></Link></IconButton>
            </div>
        </div>
    )
}

export default Header
