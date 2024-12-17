import React from 'react'
import gmap from '../assets/gmap.png'
import { FaEnvelopeSquare, FaMapMarkerAlt, FaPhoneSquareAlt, FaClock } from "react-icons/fa";
import Hero from '../components/Hero';
import aboutbanner from '../assets/banner/about-banner.jpg'
import TitleSection from '../components/TitleSection'

const Contact = () => {
    return(
        <div>
            <Hero banner={aboutbanner} title='Contact Us'/>
            <TitleSection title='Our Location' />  
              
            <div className="container max-w-[1200px] m-auto py-16 px-4 flex flex-wrap">
                    <div className='w-full my-10'>
                        <p>Explore Our Extensive Network of Locations for Convenient, Reliable, and Accessible Transportation Wherever You Are in the Region</p>
                    </div>
                    <div className=" flex flex-col lg:flex-row w-full gap-14">
                    
                        <div className=" flex flex-col items-center w-full lg:w-2/4 my-5">
                                
                            <img className=" rounded-lg" src={gmap} alt="" />
                                            
                        </div>
                        <div className=" w-full lg:w-2/5 space-y-5 p-5 rounded-xl bg-slate-200">
                            <h1 className=" font-semibold text-xl leading-tight mb-2">Office Address</h1>
                                <ul className="space-y-2 text-lg">
                                   
                                    <li className="flex items-center cursor-pointer hover:text-secondary duration-200">
                                    <a href="">
                                        <FaEnvelopeSquare className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                                    </a>
                                    <span className="py-2 px-2">ajvautomotivespvtltd@gmail.com</span>
                                    </li>
                                    <li className="flex items-center cursor-pointer hover:text-secondary duration-200">
                                    <a href="">
                                        <FaMapMarkerAlt className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                                    </a>
                                    <span className="py-2 px-2">Shop No. G/15, Gr Floor, Alice Appts. Nr. Rto, Fatorda, South Goa, Salcete, Goa, India, 403602</span>
                                    </li>
                                </ul>   
                            <h1 className=" font-semibold text-xl leading-tight mb-2">Customer Care: <span className="py-2 px-2">7875463662</span></h1>  

                        </div>
                        
                    </div>
                </div>
        </div>
    )

}

export default Contact