import React from 'react'
import Navbar from './Navbar'
import bgPic from '../assets/bgPic.jpg'
import DeepakResume from '../assets/Deepaks-Resume.pdf'
import { ExampleComponent } from './TypeAnimation'
const Hero = () => {
    return (
        <div className='bg-black h-screen w-screen max-w-7xl mx-auto overflow-x-hidden'>
            <Navbar />
            <img src={bgPic} className=' absolute opacity-5 h-[80%] object-cover bg-cover overflow-y-hidden  w-[90%] ' alt="" />
            <div className=' relative z-16 text-white pt-28 pl-12  font-Rampart '>
                <div className=' text-4xl py-8'>Hi! Deepak Singh</div>
                <div className=' text-6xl'>I am a {ExampleComponent()}</div>
                <div className=' py-8  text-2xl leading-lose w-[40%] font-Sevillana mb-8'>I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer. </div>


                <a href={DeepakResume} className=' bg-blue-600 px-20 py-3 rounded-md text-xl' download>
                    resume
                </a>
            </div>
        </div>
    )
}

export default Hero