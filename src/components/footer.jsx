import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer() {
  return (
    <>
      <div className='socials'>
        <IconContext.Provider value={{ className: 'socialIcon', color: '#2fa36c' }} >
        {/* <a href="https://twitter.com/sullysbarbers" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
        <a href="https://www.facebook.com/p/Sullys-Barber-Shop-and-Salon-100063679297829/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com/tim_the_barberr?igshid=MTFpYnZwczF1Z2Vqaw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </IconContext.Provider>
      </div>
      <div className='centerC'>
        <p className='copy'>&copy; 2021 Sully's Barber Shop and Salon</p>
      </div>
    </>
  );
}

export default Footer;
