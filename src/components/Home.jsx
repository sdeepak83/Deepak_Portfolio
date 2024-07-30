import React from 'react'
import Hero from './Hero';
import Project from './Project';
import Footer from './Footer';
import { About } from './About';
import Contact from './Contact';


const Home = () => {

    return (
        <div className='bg-black'>
            <Hero />
            <Project />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home