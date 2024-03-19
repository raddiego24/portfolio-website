import React from 'react';
import './skills.css';
import FullStack from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import iOSDevelopment from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Technical Skills</span>
        <span className='skillDesc'>I am a Computer Science graduate from The University of Southern California's Viterbi School of Engineering, with particular interests and specialization in iOS and Full Stack Development. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={FullStack} alt="" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>Full Stack Development</h2>
                    <p>The majority of my experience has been in Full Stack Development, with two internships and three multi-month projects under my belt.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={iOSDevelopment} alt="" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>iOS Development</h2>
                    <p>I have been a part of two development teams which created iOS apps based around fitness, one of which was made with Apple Watch compatibility.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>I have bolstered my design skills through prior projects and work experience. I am always open to taking on Web Design contracts for those who are looking to built a webpage/website.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;