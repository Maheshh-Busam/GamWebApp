// SocialMedia.jsx
import React from 'react';
import '../Components/SocialMedia.css';

function SocialMedia() {
    return (
        <div className='container'>
            <div className='social-media-container'>
                <div className='heading'>
                    <h1>Social Media</h1>
                </div>
                <div className='content'>
                    <div className='social-media-item'>
                        <img src='https://img.icons8.com/?size=192&id=uLWV5A9vXIPu&format=png' alt='Social Media Item' />
                        <h2>Facebook</h2>
                        <p>Follow us on Facebook for the latest updates!</p>
                    </div>
                    <div className='social-media-item'>
                        <img src='https://img.icons8.com/?size=192&id=13963&format=png' alt='Social Media Item' />
                        <h2>Twitter</h2>
                        <p>Join the conversation on Twitter!</p>
                    </div>
                    <div className='social-media-item'>
                        <img src='https://img.icons8.com/?size=192&id=32323&format=png' alt='Social Media Item' />
                        <h2>Instagram</h2>
                        <p>See our latest photos and stories on Instagram!</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SocialMedia;
