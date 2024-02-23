import React from 'react'
import image from '../Public/Images/profits 1.svg';

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
                <div>
                    <span className='sec-1-des'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...
                    </span>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='f-title'>
                <span className='con-heading'>Site Map</span>
                <span>Invoice</span>
                <span>Transaction History</span>
                <span>Profile</span>
            </div>
            <div className='f-title'>
                <span className='con-heading'>Contact Us</span>
                <div>
                    <div>
                        <span>21/22 street name, Locality, City name,</span>
                        <span>Country, Pincode - 65431</span>
                    </div>
                </div>
                <div>
                    <span>contact@ olgfinancing.com</span>
                </div>
                <div>
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