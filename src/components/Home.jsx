import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className=' w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hola, mi nombre es</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Juan Justo Müller</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>y Soy Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Soy Full Stack Developer, tengo experiencia en la creación de aplicaciones web dinámicas y eficientes. Busco soluciones innovadoras que mejoren la experiencia del usuario y optimicen el rendimiento. Con experiencia en gran variedad de tecnologias, esto ansioso por desafios que me permitan seguir aprendiendo y mejorando mis habilidades.
                </p>
                <div>
                    <button className='text-withe group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home