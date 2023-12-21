import React from 'react'

export const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method="POST" action="https://getform.io/f/a001541d-f041-4efc-85a5-75d09d0855fd" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Envía el formulario a continuación o envíame un correo electrónico - juancitomuller@gmail.com</p>
                </div>
                <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='p-2 bg-[#ccd6f6]' rows="10" placeholder='Message' name='message' />
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
            </form>
        </div>
    )
}
