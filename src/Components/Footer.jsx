import React from 'react'
import image from '../Public/Images/profits 1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import addressImg from '../Public/Images/address.svg';
import emailImg from '../Public/Images/email.svg';
import mobileImg from '../Public/Images/mobile.svg';

function Footer() {
  return (
    <section className='footer'>
        <div className='container footer-con'>
            <div className='f-title'>
                <div className='footer-log con-heading'>
                    <div>
                        <img src={image}/>
                    </div>
                    <span className='title-t1'>OLG </span>
                    <span className='title-t2'>FINANCING</span>
                </div>
                <div className='footer-menu-sep'>
                    <span className='sec-1-des'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...
                    </span>
                </div>
                <div className='social-icon-div'>
                    <span><FontAwesomeIcon className='social-icons' icon={faFacebookF} /></span>
                    <span><FontAwesomeIcon className='social-icons' icon={faTwitter} /></span>
                    <span><FontAwesomeIcon className='social-icons' icon={faLinkedinIn} /></span>
                    <span><FontAwesomeIcon className='social-icons' icon={faGooglePlusG} /></span>
                </div>
            </div>
            <div className='f-title site-map'>
                <span className='con-heading'>Site Map</span>
                <span className='footer-menu-sep'>Invoice</span>
                <span className='footer-menu-sep'>Transaction History</span>
                <span>Profile</span>
            </div>
            <div className='f-title'>
                <span className='con-heading'>Contact Us</span>
                <div className="contact-us-adress footer-menu-sep">
                    <div className='contactus-icon'>
                        <img src={addressImg} alt="" />
                    </div>
                    <div>
                        <span style={{'display': 'block'}}>21/22 street name, Locality, City name,</span>
                        <span>Country, Pincode - 65431</span>
                    </div>
                </div>
                <div className='footer-menu-sep display-flex'>
                    <div className='contactus-icon'>
                        <img src={emailImg} alt="" />
                    </div>
                    <span>contact@ olgfinancing.com</span>
                </div>
                <div className='display-flex'>
                    <div className='contactus-icon'>
                        <img src={mobileImg} alt="" />
                    </div>
                    <span>+1 348 034 087 522</span>
                </div>
            </div>
        </div>
        <div className='footer-copyright'>
            <div className="container footer-end">
                <span>Copyright 2020 OLG Financing. All Rights Reserved.</span>
                <span>Privacy Policy - Terms & Conditions</span>
            </div>
        </div>
    </section>
  )
}

export default Footer