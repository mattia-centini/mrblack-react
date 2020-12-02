import React from 'react'
import './Footer.css'
import RoomIcon from '@material-ui/icons/Room';
import CallEndIcon from '@material-ui/icons/CallEnd';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import owl from '../media/owl.png'

function Footer() {
    return (
        <div className='footer'>

            <div className='footer__top'>
                <div className='footer__topLeft'></div>
                <div className='footer__topRight'></div>
            </div>
            <div className='footer__bottom'>
                <div className='footer__bottomLogo'></div>
                <div className='footer__bottomContacts'>
                
                            <div className='contact__address'>
                                <RoomIcon/>
                                <h6>Mr.Black</h6>
                                <p>Szewska 21, 31-009 Kraków</p>
                                <div className='contact__phone'>
                                <CallEndIcon />
                                <a href="tel:+1123-456-7890">123-456-7890</a>
                                </div>
                            </div>   
                           
                            <div className='contact__hours'>
                                <QueryBuilderIcon />
                                <ul>
                                    
                                    <li>czwartek: 19:00 - 01:00</li>
                                    <li>piątek: 19:00 - 04:00</li>
                                    <li>sobota: 19:00 - 04:00</li>
                                    <li>niedziela: ZAMKNIĘTE</li>
                                </ul>
                            </div>         
                 </div>
                
                <div className='footer__bottomIcons'>
                        <div className='header__right'>
                            <IconButton size='large'><a className='header__rightAnchor' href="https://www.facebook.com/bar.mr.black/" rel='noopener' target='_blank'><FacebookIcon className='facebook' size='large'/></a></IconButton>
                            <IconButton size='large'><a className='header__rightAnchor' href="https://www.instagram.com/bar.mr.black/" rel='noopener' target='_blank'><InstagramIcon className='facebook' size='large'/></a></IconButton>
                            <IconButton size='small'><a className='header__rightAnchor' href="https://www.tripadvisor.com/Restaurant_Review-g274772-d15150528-Reviews-Mr_Black_Cocktail_Bar-Krakow_Lesser_Poland_Province_Southern_Poland.html" rel='noopener' target='_blank'><img className='header__rightTA' src={owl} /></a></IconButton>
                        </div>
                        
                        
                
                </div>
            </div>
        </div>
    )
}

export default Footer
