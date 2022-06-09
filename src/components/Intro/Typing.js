import React from 'react';
import Typewriter from 'typewriter-effect';
import './Typing.css'

const Typing = () => {
    return (
        <div >
            <div className="typing flex items-center justify-center">
                I am into 
                <Typewriter
                    options={{
                        strings: [
                            '<span style="color:red"> Programming</span>',
                            '<span >MERN </span>',

                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    );
};

export default Typing;
