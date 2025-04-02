import React, { useRef } from "react";
import "./Projects.css";
// import '../../ScrollBar.css';
// import demoimage from '../../images/me.png';
import express from "../../images/express.png";
import react from "../../images/react.svg";
//import firebase from "../../images/firebase.svg";
// import javascript from '../../images/js.svg';

import fitness from "../../images/fitness.mp4";
import megamart from "../../images/megamart.mp4";
//import webchat from "../../images/webchat.mp4";

const Projects = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handleMouseEnter1 = () => {
    if (videoRef1.current) {
      videoRef1.current.play().catch(error => console.warn("Play interrupted", error));
    }
  };
  
  const handleMouseLeave1 = () => {
    if (videoRef1.current) {
      videoRef1.current.pause();
      videoRef1.current.currentTime = 0;
    }
  };
  
  const handleMouseEnter2 = () => {
    if (videoRef2.current) {
      videoRef2.current.play().catch(error => console.warn("Play interrupted", error));
    }
  };
  
  const handleMouseLeave2 = () => {
    if (videoRef2.current) {
      videoRef2.current.pause();
      videoRef2.current.currentTime = 0;
    }
  };
  
  const handleMouseEnter3 = () => {
    if (videoRef3.current) {
      videoRef3.current.play().catch(error => console.warn("Play interrupted", error));
    }
  };
  
  const handleMouseLeave3 = () => {
    if (videoRef3.current) {
      videoRef3.current.pause();
      videoRef3.current.currentTime = 0;
    }
  };
  

  return (
    <>
      <div className="project" id="projects">
        <div className="projectdata">
          <h1 className="projectheading">
            Projects📑
            <hr />
          </h1>
          <div className="projectcontent">
            <div className="projectleft">
              <div
                className="image"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <video ref={videoRef1} muted src={fitness}></video>
              </div>
            </div>
            <div className="projectright">
              <h2>
                FitnessTrack🗳️
                <hr />
              </h2>
              <p>
                FitnessTrack is a Full-Stack Fitness Tracking System where users
                can log, monitor, and analyze their workout and health data,and
                calculate their BMI enabling personalized progress tracking and
                performance insights
              </p>
              <div className="techused">
                <div className="techHead">
                  Tech Used<span>&nbsp;&nbsp; |</span>
                </div>
                <div className="tech">
                  React&nbsp;<img src={react} alt="react"></img>
                </div>
                {/* <div className="tech">
                  NodeJS&nbsp;<img src={node} alt="node"></img>
                </div> */}
                <div className="tech">
  ExpressJS&nbsp;<img src={express} alt="express"></img>
</div>
              </div>
              <div className="navbuttons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/arka1089/FItnessTrack-master"
                >
                  <div className="codebutton">
                    Code&nbsp;<i className="bx bxl-github"></i>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  //className="codebutton"
                  href="https://f-itness-track-master-flli.vercel.app/"
                >
                  <div className="demobutton">
                    Live Demo&nbsp;<i className="bx bx-link-external"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="projectcontent reverse">
            <div className="projectleft">
              <div
                className="image"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <video ref={videoRef2} muted src={megamart}></video>
              </div>
            </div>
            <div className="projectright">
              <h2>
                MegaMart 🛒
                <hr />
              </h2>
              <p>
                MegaMart 🛒 is a Full-Stack E-Commerce Management System
                designed to provide a seamless shopping experience. It offers
                features such as product browsing, secure checkout, order
                tracking, and inventory management. 
              </p>
              <div className="techused">
                <div className="techHead">
                  Tech Used<span>&nbsp;&nbsp; |</span>
                </div>
                <div className="tech">
                  React&nbsp;<img src={react} alt="react"></img>
                </div>
                <div className="tech">
                  Express&nbsp;<img src={express} alt="express"></img>
                </div>
              </div>
              <div className="navbuttons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/arka1089/MegaMart"
                >
                  <div className="codebutton">
                    Code&nbsp;<i className="bx bxl-github"></i>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mega-mart-peach.vercel.app/"
                >
                  <div className="demobutton">
                    Live Demo&nbsp;<i className="bx bx-link-external"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
{/* 
          <div className="projectcontent">
            <div className="projectleft">
              <div
                className="image"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <video ref={videoRef3} muted src={coinworld}></video>
              </div>
            </div>
            <div className="projectright">
              <h2>
                CoinWorld🪙
                <hr />
              </h2>
              <p>
                CoinWorld is a web based crypto tracking website that allows
                users to search information about various cryptocurrencies in
                real-time.
              </p>
              <div className="techused">
                <div className="techHead">
                  Tech Used<span>&nbsp;&nbsp; |</span>
                </div>
                <div className="tech">
                  React&nbsp;<img src={react} alt="reract"></img>
                </div>
                <div className="tech">
                  CSS3&nbsp;<img src={css} alt="css"></img>
                </div>
              </div>
              <div className="navbuttons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Akash-1627/coinworld"
                >
                  <div className="codebutton">
                    Code&nbsp;<i className="bx bxl-github"></i>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://akash-1627.github.io/coinworld/"
                >
                  <div className="demobutton">
                    Live Demo&nbsp;<i className="bx bx-link-external"></i>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
