import React, { useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skill = ({ skill }) => {
    const { name, skill_percentage, svg } = skill;
    const images = require.context('./language', false);
    let svgIcon = images(`./${svg}`);

    return (
        <div className='flex flex-col justify-center items-center bg-success rounded-lg p-3 text-white hover:transition-all hover:translate-y-1'>

            <div className='flex items-center pb-3'>
                <div class="tooltip tooltip-open tooltip-primary tooltip-right" data-tip={skill_percentage + ' %'}>
                    <h1 className='text-xl sm:text-2xl md:text-3xl'>{name}</h1>
                </div>

            </div>
            <div className='w-20'>
                <CircularProgressbarWithChildren strokeWidth='10'
                counterClockwise
                styles={buildStyles({
                    textColor: "red",
                    pathColor: '#570DF8',
                    trailColor: "white"
                })} value={skill_percentage}>
                    <img style={{ width: 40 }} src={svgIcon} alt="doge" />
                </CircularProgressbarWithChildren>
            </div>

        </div>
    );
};

export default Skill;