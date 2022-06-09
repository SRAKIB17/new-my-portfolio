import React from 'react';
import profile from '../Intro/me.jpg'

const About = () => {
    return (
        <div id='about' className='p-5 '>
            <div class="hero min-h-screen bg-base-200 rounded-lg shadow-inner">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={profile} alt='' class="max-w-sm rounded-lg w-[260px] h-[300px] shadow-2xl mr-2" />
                    <div>
                        <h1 class="text-5xl font-bold text-white">About Me</h1>
                        <p class="py-6 text-justify">
                            As you'll see, I have applications using modern HTML5, CSS, JavaScript, React, NodeJS, Express, and MongoDB.
                            I have acquired customer service, teamwork, leadership, problem-solving, and time management skills. My well-rounded expertise and extensive domain knowledge would make me an ideal asset to your team. Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization. I am most interested in working in that sector. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements.
                        </p>
                        <button class="btn btn-info text-white font-bold">Explore Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;