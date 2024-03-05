// News.jsx
import React from 'react';
import '../Components/News.css';

function News() {
    return (
        <div className='container'>
            <div className='news-container'>
                <div className='heading'>
                    <h1>News</h1>
                </div>
                <div className='content'>
                    <div className='news-item'>
                        <h2>Sample News Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ullamcorper ex, et tempus libero.</p>
                    </div>
                    <div className='news-item'>
                        <h2>Sample News Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ullamcorper ex, et tempus libero.</p>
                    </div>
                    <div className='news-item'>
                        <h2>Sample News Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ullamcorper ex, et tempus libero.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default News;
