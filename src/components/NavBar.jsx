import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'


const NavBar = () => {
    const [nav, setNav] = useState(false)

    const sendEmail = () => {
        const emailAddress = 'juancitomuller@gmail.com'; // Change this to your email address
        const encodedEmail = encodeURIComponent(emailAddress);
        window.location.href = `mailto:${encodedEmail}`;
    };


    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                {/* logo personalizado (iniciales)*/}
            </div>
            {/* menu */}
            <div>
                <ul className='hidden md:flex'>
                    <li>
                        <Link to='home' smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to='projects' smooth={true} duration={500} >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* logo menu mobile */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* menu mobile*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social-icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/juanjustomuller/" target='blank' rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/juanjustomuller" target='blank' rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' onClick={sendEmail}
                            href="">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="../Juan-Justo-Muller-CV.pdf" download={''}>
                            Cv <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar