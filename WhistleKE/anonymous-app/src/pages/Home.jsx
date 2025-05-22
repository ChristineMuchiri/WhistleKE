{/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";*/}
import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    {/*const hashedId = localStorage.getItem("userId") || "unknown";*/ }
    const fakeWhistles = [
        {
            user: "shadow-abcd123",
            content: "A procurement officer demands a bribe"
        },
        {
            user: "shadow-4rdwrf",
            content: "Funds were misappropriated"
        },
    ];



    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Whistle Feed</h1>
                <p className="tagline" > Voices in the shadows...</p>
            </header>
            <Link to="/leak">
                <button className="leak-button">Drop a Leak</button>
            </Link>

            <div className="feed">
                {fakeWhistles.map((item) => (
                    <div className="whistle" key={item.user}>
                        <span className="user-id">shadow-{item.user}</span>
                        {item.content}
                    <div className="actions">
                        <button>Like</button>
                        <button>Comment</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Home;