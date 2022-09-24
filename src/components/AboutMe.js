import React from 'react';
import headshot from '../headshot.jpg';

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrapper mb-5'>
                        <img className='profile-img' src={headshot} alt="author's headshot" />
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h2 className='about-heading'>About Me</h2>
                    <p>
                        My name is Kody Anderson, I am a senior graduating in December 2023 with a major in Software Design & Development.
                        My skills include Java, C++, JavaScript (with Node.js & MongoDB), as well as experience using git / GitHub, and SQL (Apache Derby).

                        I am eager to enter the workforce and practice the skills I have learned (and continue to learn) and I look forward
                        to becoming an invaluable asset to my employer as a software developer!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe