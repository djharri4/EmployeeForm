import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="video-background">
            <video autoPlay muted loop id="video-bg">
                <source src="/finalvideo.mp4" type="video/mp4" />
            </video>
            <div className="content">
                <h1>Welcome to Vonte Enterprise</h1>
                <Link to="/employee-form" className="btn-employee-form">Employee Form</Link>
            </div>
        </div>
    );
}

export default Home;
