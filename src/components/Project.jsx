import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import JobPortelOne from '../assets/jobPortelOne.png'
import JobPortelTwo from '../assets/JobPortelTwo.png'
import JobPortelThree from '../assets/JobPortelThree.png'
import { FaGithub } from "react-icons/fa";
import ProjectLogo from './ProjectLogo';
import Netfix from '../assets/Netflix.png'

const Project = () => {

    const JobPortelimages = [
        { url: JobPortelOne },
        { url: JobPortelTwo },
        { url: JobPortelThree },


    ];
    const Netfliximages = [
        { url: Netfix },



    ];
    return (

        <div>

            <h1 className=' text-6xl text-white font-semibold text-center pb-24 font-Sevillana'>Projects</h1>
            <div className=' bg-black  max-w-7xl mx-auto grid grid-cols-2 gap-10 '>


                <div className=' h-auto w-[100%]  bg-white pb-0 flex flex-col rounded-lg'>

                    <SimpleImageSlider
                        width={658}
                        height={400}
                        images={JobPortelimages}
                        showNavs={true}
                        showBullets={true}
                        loop={true}
                        autoPlay={true}
                    />
                    <div className=' bg-purple-800 text-white mt-4 py-3 hover:bg-purple-900'>
                        <div className='flex justify-between px-12 '>
                            <h1 className=' text-center text-3xl font-bold '>Job Portel </h1>
                            <h1 className=' flex items-center justify-center text-xl font-semibold hover:text-green-400 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md cursor-pointer'><a href="https://github.com/sdeepak83/Job_Portal"> GitHub</a> <FaGithub /> </h1>
                        </div>
                        <div>
                            <ProjectLogo />
                        </div>
                        <h1 className='px-12 font-light text-md pt-4'>It is an Job Posting platform built with MERN stack. </h1>
                    </div>
                </div>


                <div className=' h-auto w-[100%]  bg-white pb-0 flex flex-col rounded-lg'>

                    <SimpleImageSlider
                        width={658}
                        height={400}
                        images={Netfliximages}
                        showNavs={true}
                        showBullets={true}
                        loop={true}
                        autoPlay={true}
                    />
                    <div className=' bg-purple-800 text-white mt-4 py-3 hover:bg-purple-900'>
                        <div className='flex justify-between px-12 '>
                            <h1 className=' text-center text-3xl font-bold '>Netflix-GPT </h1>
                            <h1 className=' flex items-center justify-center text-xl font-semibold hover:text-green-400 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md cursor-pointer'><a href="https://github.com/sdeepak83/Netflix-GPT"> GitHub</a> <FaGithub /> </h1>
                        </div>
                        <div>
                            <ProjectLogo />
                        </div>
                        <h1 className='px-12 font-light text-md pt-4'>NetflixGPT is a dynamic movie recommendation system based on user's mood using gpt </h1>
                    </div>


                </div>












            </div>


        </div>
    )
}

export default Project