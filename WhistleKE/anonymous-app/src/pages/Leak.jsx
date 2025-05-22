import React from 'react';
import "./Leak.css";

const Leak = () => {
    return (
        <div className="leak-container">
            <h1>Drop a Leak</h1>

            <form className="leak-form">
                <textarea rows="5" placeholder="What do you want to report anonymously?"
                    required
                />
                <button type="submit">Drop Whistle</button>
            </form>
        </div>
    )
};

export default Leak;