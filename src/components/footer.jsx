import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='centerR'>
      <div className='socials'>
        <a href="https://twitter.com/sullysbarbers" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.facebook.com/SullysBarbershop" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/sullysbarbershop/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className='copy centerC'>
        <p>&copy; 2021 Sully's Barber Shop</p>
      </div>
    </footer>
  );
}

export default Footer;
