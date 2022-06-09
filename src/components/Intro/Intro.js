import React from 'react';
import Typing from './Typing';
import profile from './me.jpg'
import hand from './Hand.gif'
import './style.css'

const Intro = () => {

    return (
        <div className='p-4 tsparticles'>
            <div className='text-center text-white'>
                <div className='flex justify-center text-2xl'>
                    Hi <img src={hand} className='align-middle w-[35px]' alt="" /> , I'm RAKIB
                </div>
                <div class="avatar m-4">
                    <div class="w-72 mask mask-hexagon">
                        <img src={profile} />
                    </div>
                </div>
                <Typing />
            </div>
        </div>
    );
};

export default Intro;