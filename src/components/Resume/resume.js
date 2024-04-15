import React from 'react';
import './resume.css';
// import ryanResume from '../../assets/Ryan_Resume_March_2024.png';
// import ryanResumePDF from '../../Ryan_Addiego_Resume.pdf'

import ryanResume from '../../assets/‎Ryan_Resume_April_2024.png';
import ryanResumePDF from '../../assets/Ryan_Resume_April_2024.pdf'

const Resume = () => {

  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("./Ryan_Addiego_Resume.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            // const fileURL =
            //     window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = ryanResumePDF;
            alink.download = "Ryan_Addiego_Resume.pdf";
            alink.click();
        });
    });
};

  return (
    <section id='resume'>
        <div className='resumeTitle'>
            Resume
        </div>
        <img src={ryanResume} alt="resume" className='resumeImg' />
        <button onClick={onButtonClick} className='resumeDownloadBtn'>Download Resume</button>
    </section>
  );
}

export default Resume;