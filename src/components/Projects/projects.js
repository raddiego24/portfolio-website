import React from 'react'
import './projects.css';
import Spotify from '../../assets/spotify-logo.png';
// import MoveIntel from '../../assets/moveintel.png';
// import Caregiver from '../../assets/caregiver.png';
import Scout from '../../assets/scout.png';

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projectsTitle'>My Projects</h2>
        <span className='projectsDesc'>I thrive in a high-paced team environment, always striving to bring the best out of myself and my peers. In addition to my no-task-too-small attitude and team-focused mentality, I excel in projects using Java, Javascript, and Swift, executing demanding projects with efficiency, solid visual user interfaces, and a friction-free user experience.</span>
        {/* <div className='flip-box'>
          <div className='flip-box-front'>
            <img src={Portfolio1} alt="" />
          </div>
          <div className='flip-box-back'>
            <div className='flip-box-back-in'>
              <h4>Project Name</h4>
            </div>
          </div>
        </div> */}
        <div className='projectsImgs'>
          <div className='flip-box'>
            <div className='flip-box-front'>
              {/* <img src={MoveIntel} alt="" className='moveIntel'/> */}
              <h4 className='moveIntel'>MoveIntel</h4>
            </div>
            <div className='flip-box-back'>
              <div className='flip-box-back-in'>
                <h4>MoveIntel</h4>
                <h3>• Led a collaborative effort in a full-stack website and iOS app development process with the goal of providing athletes with direct access to physical therapists, personalized recovery plans, and performance statistics. </h3>
                <h3>• Took charge leading the iOS portion which was instrumental in enabling users to seamlessly upload personal exercise videos to our AWS S3 Bucket. </h3>
                <h3>• Implemented integration with MoveIntel’s AI Scoring scale, enhancing the app’s capability to analyze and provide valuable insights based on user-generated content.</h3>
              </div>
            </div>
          </div>
          <div className='flip-box'>
            <div className='flip-box-front'>
              {/* <img src={Caregiver} alt="" className='projectsImg'/> */}
              <h4 className='moveIntel'>Caregiver Navigator</h4>
            </div>
            <div className='flip-box-back'>
              <div className='flip-box-back-in'>
                <h5>Caregiver Navigator</h5>
                <h3>• Developed a web application dedicated to supporting dementia patients, fostering connections between patients and caregivers to essential medical counseling and education.</h3>
                <h3>• Led the UI design process and had a significant role in front-end development, skillfully integrating medical information on dementia for user-friendly consumption.</h3>
                <h3>• Collaborated with project partner to achieve a fully translated version of the site in Arabic.</h3>
              </div>
            </div>
          </div>
          <div className='flip-box'>
            <div className='flip-box-front'>
              <img src={Scout} alt="" className='projectsImg'/>
            </div>
            <div className='flip-box-back'>
              <div className='flip-box-back-in'>
                <h4>Scout</h4>
                <h3>• An iOS and WatchOS development project created to maintain the safety of runners if they are injured or lost during their run.</h3>
                <h3>• Worked with the emergency contact features, including sending a SMS text to all emergency contacts and alerting emergency services of the incident, when the user cannot reach their device.</h3>
              </div>
            </div>
          </div>
          <div className='flip-box'>
            <div className='flip-box-front'>
              <img src={Spotify} alt="" className='projectsImg'/>
            </div>
            <div className='flip-box-back'>
              <div className='flip-box-back-in'>
                <h4>Datafy</h4>
                <h3>• Led the backend development of a web application created to project a Spotify user’s top artists and songs of the upcoming month.</h3>
                <h3>• Produced a Java based backend, using a wrapper of Spotify’s API to pull the user's listening data. This data was then filtered to show the user's current top artists and songs of the past day, week, month and/or year.</h3>
                <h3>• The user's most recent listening statistics were used to predict their habits over the following weeks.</h3>
              </div>
            </div>
          </div>
            {/* <img src={Portfolio1} alt="" className="projectsImg" />
            <img src={Portfolio2} alt="" className="projectsImg" />
            <img src={Portfolio3} alt="" className="projectsImg" />
            <img src={Portfolio4} alt="" className="projectsImg" />
            <img src={Portfolio5} alt="" className="projectsImg" />
            <img src={Portfolio6} alt="" className="projectsImg" /> */}
        </div>
        {/* <button className='projectsBtn'>See More</button> */}
    </section>
  )
}

export default Projects