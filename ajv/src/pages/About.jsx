
import React from 'react'
import SellingPoint from '../components/SellingPoint'
import TitleSection from '../components/TitleSection'
import Hero from '../components/Hero'
import aboutbanner from '../assets/banner/striker_banner.jpg' 

const About = () => {
    return(
        <div>
            <Hero banner={aboutbanner} title='About AJV'/>
            <TitleSection title='Unique selling point' />  
            <SellingPoint />
        </div>
    )

}

export default About
