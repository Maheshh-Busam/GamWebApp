import React from 'react';
import videoBg from '../assets/videoBg.mp4';
import './BackgroundVideo.css';

function BackgroundVideo({scrollToAbout}) {

      
    return (
        <div className="background-video">
            <video className="video" autoPlay loop muted>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Built by developers.
                    For developers.
                    With fair terms for all.
                    Let's build incredible things together.
                </h1>       
            </div>
            <div className="button-container">
                <button className="button" onClick={scrollToAbout}>Know more about Us</button>
            </div>
        </div>
    );
}

export default BackgroundVideo;
