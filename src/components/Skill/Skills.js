import React from 'react';
import Skill from './Skill';
const mySkill = [
    {
        name: 'HTML',
        skill_percentage: 95,
        svg: 'html.svg'
    },
    {
        name: 'CSS',
        skill_percentage: 95,
        svg: 'css.svg'
    },
    {
        name: 'Bootstrap',
        skill_percentage: 80,
        svg: 'bootstrap5.svg'
    },
    {
        name: 'Tailwind ',
        skill_percentage: 90,
        svg: 'tailwind.svg'
    },
    {
        name: 'JAVASCRIPT',
        skill_percentage: 80,
        svg: 'js.svg'
    },
    {
        name: 'REACT',
        skill_percentage: 80,
        svg: 'react.svg'
    },
    {
        name: 'Nodejs',
        skill_percentage: 80,
        svg: 'nodejs.svg'
    },
    {
        name: 'C',
        skill_percentage: 2,
        svg: 'fallback.svg'
    },
    {
        name: 'Python',
        skill_percentage: 20,
        svg: 'python.svg'
    },
    {
        name: 'Python',
        skill_percentage: 20,
        svg: 'python.svg'
    },
    {
        name: 'Numpy',
        skill_percentage: 20,
        svg: 'numpy.svg'
    },
    {
        name: 'Pandas',
        skill_percentage: 20,
        svg: 'pandas.svg'
    }
]

const Skills = () => {

    return (
        <div className=' md:m-6 p-5 bg-base-200 m-5 rounded-lg shadow-inner' id='skill'>
            <h1 className='text-center text-2xl m-4 font-bold'>MY SKILL</h1>
            <div class="divider"></div>
            <div className='text-center grid-cols-2 gap-2 grid sm:grid-cols-3 md:grid-cols-5'>
                {
                    mySkill.map(skill => <Skill skill={skill} />)
                }

            </div>
        </div>
    );
};

export default Skills;