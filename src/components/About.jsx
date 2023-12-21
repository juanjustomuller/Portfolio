import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hola soy Juan Justo Müller, y es un placer darles la bienvenida a mi portfolio.</p>
                    </div>
                    <div>
                        <p>Bienvenidos a mi portfolio, aquí podrán explorar mi pasión por la programación a través de una pequeña colección de algunos de mis ultimos proyectos. Mi idea es construir soluciones funcionales y creativas, ya sea en proyectos más modestos que permiten una atención meticulosa a los detalles o en desafíos a mayor escala que requieren una perspectiva amplia y una implementación mas compleja.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
