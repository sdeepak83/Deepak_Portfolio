import React from 'react'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import js from '../assets/js.jpg'
import react from '../assets/react.jpg'
import talwind from '../assets/talwind.jpg'
import ejs from '../assets/ejs.jpg'
import mongo from '../assets/mongo.jpg'
import redux from '../assets/redux.jpg'

const ProjectLogo = () => {
    return (
        <div className=' flex gap-3 px-12 pt-4'>
            <img className=' h-5' src={html} alt="html" />
            <img className=' h-5' src={css} alt="html" />
            <img className=' h-5' src={js} alt="html" />
            <img className=' h-5' src={react} alt="html" />
            <img className=' h-5' src={redux} alt="html" />
            <img className=' h-5' src={ejs} alt="html" />
            <img className=' h-5' src={mongo} alt="html" />
            <img className=' h-5' src={talwind} alt="html" />
        </div>
    )
}

export default ProjectLogo