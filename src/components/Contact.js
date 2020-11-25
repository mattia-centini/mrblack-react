import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'
import RoomIcon from '@material-ui/icons/Room';
import CallEndIcon from '@material-ui/icons/CallEnd';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

function Contact() {
    return (
        <div className='contact'>
            <div className='contact__top'><h2>Contact</h2></div>
            <div className='contact__bottom'>
                    <div className="contact__left">
                        <div className='contact__wrap'>
                            <div className='contact__address'>
                                <RoomIcon/>
                                <h6>Mr.Black</h6>
                                <p>Szewska 21, 31-009 Kraków</p>
                            </div>   
                            <div className='contact__phone'>
                                <CallEndIcon />
                                <a href="tel:+1123-456-7890">123-456-7890</a>
                                </div>
                            <div className='contact__hours'>
                                <QueryBuilderIcon />
                                <ul>
                                    <li>poniedziałek: ZAMKNIĘTE</li>
                                    <li>wtorek: ZAMKNIĘTE </li>
                                    <li>środa: ZAMKNIĘTE</li>
                                    <li>czwartek: 19:00 - 01:00</li>
                                    <li>piątek: 19:00 - 04:00</li>
                                    <li>sobota: 19:00 - 04:00</li>
                                    <li>niedziela: ZAMKNIĘTE</li>
                                </ul>
                            </div>         
                        </div>


                    </div>
               
                    <div className='contact__right'>
                      <ContactForm />
                    </div>
            
            </div>
            
        </div>
    )
}

export default Contact
