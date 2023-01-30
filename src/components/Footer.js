import React from 'react';
import logoWhite from '../../src/assets/img/logoWhite.svg';


const Footer = () => {
    return (
        <div className='footer'>
            <img src={logoWhite} alt="logo kasa blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;