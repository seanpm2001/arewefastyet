/*
Copyright 2023 The Vitess Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './header.css'

//import image

import logo from '../../assets/logo.png'

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const handleMenuClick = () => {
        window.scrollTo(0, 0);
        if (window.innerWidth <= 768) {
            setOpenMenu(false);
          } else {
            setOpenMenu(true);
          }
      };
    
      const [visible, setVisible] = useState(true);
      const [lastScrollTop, setLastScrollTop] = useState(0);

      useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop && scrollTop > 45) {
            // Si on scroll vers le bas de plus de 50px, on cache la div
            setVisible(false);
          } else {
            // Sinon, on réaffiche la div
            setVisible(true);
          }
          setLastScrollTop(scrollTop);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [lastScrollTop]);

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setOpenMenu(false);
          } else {
            setOpenMenu(true);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial window size
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className={`header flex ${visible ? 'visible' : 'hidden'}`}>
        
            <div className='logo__container'>
                <img src={logo} alt='logo'/>
                <span>Benchmark</span>
            </div>
            {openMenu ? (
                <>
                    <nav>
                    <ul className='header__nav flex'>
                        {[
                            { to: '/home', label: 'Home' },
                            { to: '/status', label: 'Status' },
                            { to: '/status', label: 'CRON' },
                            { to: '/status', label: 'Compare' },
                            { to: '/status', label: 'Search' },
                            { to: '/status', label: 'Micro' },
                            { to: '/status', label: 'Macro' }
                            ].map((link, index) => (
                            <li key={index}>
                                <NavLink className='header__link' activeclassname='active' onClick={handleMenuClick} to={link.to}>
                                {link.label}
                                </NavLink>
                            </li>
                            ))}
                    </ul>
                </nav>
                <figure className='hamburgerMenu' onClick={() => setOpenMenu(false)}>
                    <figure className='lineMenuTop'></figure>
                    <figure className='lineMenuBottom'></figure>
                </figure> 
            </>
            ) :
            <figure className='hamburgerMenu' onClick={() => setOpenMenu(true)}>
                <figure className='lineMenuTop'></figure>
                <figure className='lineMenuBottom'></figure>
            </figure> 
            
            }
            
            
            
        </div>
    );
};

export default Header;