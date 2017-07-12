/**
 * Created by hilakerer1 on 14/06/2017.
 */
import React from 'react'
import '../styles/Header.css'

const Header = ()=> (
    <div className='top-menu' >
        <div className='header-item logo'>Logo</div>
        <div className='header-item new-menu'>+ New Event</div>
        <div className='header-item about-menu'>about</div>
        <div className='header-item contact-us-menu'>contact us</div>
    </div>
);

export default Header;