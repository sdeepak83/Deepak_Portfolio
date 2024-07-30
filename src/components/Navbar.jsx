import React from 'react'
import logo from '../assets/Logo.png'

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Navbar = () => {
    return (

        <div className='   flex items-center justify-between mx-auto max-w-7xl h-16 text-white py-12   '>
            <img src={logo} className=' h-28' alt="Logo Image" />

            <div className=' flex gap-10 font-semibold'>


                <a to="https://github.com/sdeepak83" target='_blank ' className=' hover:text-purple-800 cursor-pointer'><h1 className=' text-xl'><FaGithub /></h1></a>


                <a to="https://www.linkedin.com/in/deepak-singh-28b33b271/" target='_blank ' className=' hover:text-blue-600 cursor-pointer'><h1 className=' text-xl'><FaLinkedin /></h1></a>


                <a to="https://www.instagram.com/deepak8_3/" target='_blank ' className=' hover:text-orange-800 cursor-pointer'><h1 className=' text-xl'><FaInstagram /></h1></a>



            </div>
        </div>
    )
}

export default Navbar