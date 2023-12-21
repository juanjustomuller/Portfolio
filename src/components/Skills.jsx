import React from 'react'
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import ReduxImg from '../assets/redux.svg';
import Node from '../assets/node.png';
import WordpressImg from '../assets/wordpress.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Github from '../assets/github.png';

export const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are de technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt="Js icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                        <p className='my-4'>REACT</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReduxImg} alt="REDUX icon" />
                        <p className='my-4'>REDUX</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="NODE icon" />
                        <p className='my-4'>NODE</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={WordpressImg} alt="WORDPRESS icon" />
                        <p className='my-4'>WORDPRESS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="GITHUB icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
