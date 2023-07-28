import React from 'react';
import '../styles/Footer.css'

const Footer=()=>{
    return(
        <div className='footer'>
            <div className=' sb_footer section_padding'>
                <div className='footer_links'>
                    <div footer='footer_linksdiv'>
                        {/* <img style={{width:100}}  src='logo1.jpg'></img> */}
                        <p>
                            @{new Date().getFullYear()}  crafterscorner.com
                        </p>
                        <p>All rights reserved</p>
                    </div>
                    <div className='footer_linksdiv'>
                        <h3 style={{color: "black"}}>Company</h3>
                        <p>About</p>
                        <p>Products</p>
                        <p>Pricing</p>
                        <p>Referral programme</p>
                        <p>Careers</p>
                        <p>Press & media</p>
                    </div>
                    <div className='footer_linksdiv'>
                        <h3 style={{color: "black"}}>Support</h3>
                        <p>Contact ust</p>
                        <p>Support portal</p>
                        <p>Z-Connect blog</p>
                        <p>List of charges</p>
                        <p>Market overview</p>
                    </div>
                </div>
                <hr></hr>
                <div className='footer_below'>
                    <div className='footer_below_links'>
                       

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;