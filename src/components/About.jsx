import React from 'react'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import js from '../assets/js.jpg'
import react from '../assets/react.jpg'
import talwind from '../assets/talwind.jpg'
import ejs from '../assets/ejs.jpg'
import mongo from '../assets/mongo.jpg'
import redux from '../assets/redux.jpg'
import Deepak from '../assets/Deepak.jpg'


export const About = () => {



    return (
        <div>

            <h1 className=' text-6xl text-white font-semibold text-center py-24 font-Sevillana'>About</h1>
            <div className=' bg-black  max-w-7xl mx-auto grid grid-cols-2 gap-10 text-white'>

                <div className=' text-xl  font-Libr'>
                    <div>
                        Hi Everyone My name is Deepak Singh I completed b.tech in june 2023. with a passion for web development. Creative M.E.R.N. Stack Developer with Proficiency in HTML, CSS, JavaScript and Library/Frameworks like React-JS, Express-JS (MongoDB as database) & Tailwind CSS. I have experience in Full stack development and constantly learning and expanding my skill set. During my studies, I completed several projects that involved creating responsive and user-friendly websites.
                    </div>

                    <div className=' py-12'>
                        I am seeking opportunities to grow and develop my skills in web development, and am open to full-time, part-time, or internship positions. If you are looking for a hardworking, motivated, and reliable web developer, please feel free to connect with me. I am excited to explore new opportunities and make a positive impact in the industry.
                    </div>
                </div>
                <div className=' mx-auto'>
                    <div className=' hover:scale-75 duration-500 boximg cursor-pointer border-2 rounded-lg'>
                        <img className=' h-full w-full object-cover' src={Deepak} alt="Deepak pic" />
                    </div>

                </div>


            </div>

            <div className='  flex justify-center w-screen'>
                <div className=' flex gap-3 px-12 pt-4'>
                    <img className=' h-12' src={html} alt="html" />
                    <img className=' h-12' src={css} alt="html" />
                    <img className=' h-12' src={js} alt="html" />
                    <img className=' h-12' src={react} alt="html" />
                    <img className=' h-12' src={redux} alt="html" />
                    <img className=' h-12' src={ejs} alt="html" />
                    <img className=' h-12' src={mongo} alt="html" />
                    <img className=' h-12' src={talwind} alt="html" />
                </div>
            </div>



        </div>
    )
}




