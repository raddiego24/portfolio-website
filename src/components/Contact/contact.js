import React from 'react'
import './contact.css'
import linkedIn from '../../assets/linkedInLogo.png'
import gmail from '../../assets/gmailLogo.png'
import phone from '../../assets/phoneLogo.png'
// import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section id='contact'>
        <span className='contactTitle'>My Contacts</span>
        <div className='contactBars'>
            <div className='contactBar'>
                <img src={phone} alt="" className="contactBarImg" />
                <div className='contactBarText'>
                    <h2>Phone</h2>
                    <p>(510) 421-0791</p>
                </div>
            </div>
            <div className='contactBar'>
                <img src={gmail} alt="" className="contactBarImg" />
                <div className='contactBarText'>
                    <h2>Email</h2>
                    <p>ryan@addiego.com</p>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/ryan-addiego/" target="_blank" rel="noreferrer"> 
                <div className='contactBar'>
                        <img src={linkedIn} alt="" className="contactBarImg" />
                        <div className='contactBarText'>
                            <h2>LinkedIn</h2>
                            <p className='linkText'>https://www.linkedin.com/in/ryan-addiego/</p>
                        </div>
                </div>
            </a>
        </div>
    </section>
  )
}

export default Contact