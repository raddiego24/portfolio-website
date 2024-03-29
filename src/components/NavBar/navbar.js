import React, { useState } from 'react';
import './navbar.css'
// import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        {/* <img src={logo} alt="logo" className='logo' /> */}
        <Link to='intro' smooth={true} offset={-100} duration={500} className="logoText">RA</Link>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Resume</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contacts</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" /> <Link to='contact' smooth={true} offset={-50} duration={500} className="">Contact Me</Link>
        </button>
        <img src={menu} alt="menu" className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>Resume</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>Contacts</Link>
        </div>
    </nav>
  )
}

export default Navbar;