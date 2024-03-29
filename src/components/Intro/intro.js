import React from 'react'
import './intro.css'
// import {Link} from 'react-scroll';
import ryan from '../../assets/JobProfilePic.jpeg'


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Ryan Addiego</span> <br />Software Engineer</span>
            <p className="introPara">I am a Computer Science graduate <br />with experience in Full Stack and iOS Development</p>
            {/* <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link> */}
        </div>
        <img src={ryan} alt="profile" className='bg' />
    </section>
  )
}

export default Intro;