
import React from 'react'
import Revenue from '../components/Revenue'
import aboutbanner from '../assets/banner/striker_banner.jpg' 
import Hero from '../components/Hero'
import TitleSection from '../components/TitleSection'
import Mission from '../components/Mission'

const Service = () => {
    return(
        <div>
            <Hero banner={aboutbanner} title='Our Service'/>
            <TitleSection title='Revenue Model' />  
            <Revenue />
            <TitleSection title='Target Market' /> 
            <Mission />
        </div>
    )

}

export default Service
