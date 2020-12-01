import React from 'react'
import './Header.css'
import logo from '../media/Mrblack-logo.png'
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import owl from '../media/owl.png'

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton size='small'><Link to='/about'><p>About Us</p></Link></IconButton>
                <IconButton size='small'><Link to='/gallery'><p>Gallery</p></Link></IconButton>
                <IconButton size='small'><Link tp='/menu'><p>Menu</p></Link></IconButton>
                <IconButton size='small'><Link to='/contact'><p>Contact</p></Link></IconButton>
                {/* <IconButton size='small'><Link to='/offer'><p>Offer</p></Link></IconButton> */}
            </div>
            <div className='header__center'>
                <Link to='/'>
                     <img src={logo} alt='Mr Black Logo' />
                 </Link>        
            </div>
            <div className='header__right'>
                <IconButton size='large'><a className='header__rightAnchor' href="https://www.facebook.com/bar.mr.black/" rel='noopener' target='_blank'><FacebookIcon className='facebook' size='large'/></a></IconButton>
                <IconButton size='large'><a className='header__rightAnchor' href="https://www.instagram.com/bar.mr.black/" rel='noopener' target='_blank'><InstagramIcon className='facebook' size='large'/></a></IconButton>
                <IconButton size='small'><a className='header__rightAnchor' href="https://www.tripadvisor.com/Restaurant_Review-g274772-d15150528-Reviews-Mr_Black_Cocktail_Bar-Krakow_Lesser_Poland_Province_Southern_Poland.html" rel='noopener' target='_blank'><img className='header__rightTA' src={owl} /></a></IconButton>
                
            </div>
        </div>
    )
}

export default Header
