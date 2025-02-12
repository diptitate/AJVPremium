import React from 'react'
import aboutbanner from '../assets/banner/striker_banner.jpg' 
import Hero from '../components/Hero'
import TitleSection from '../components/TitleSection'
import vision from '../assets/vision.png'
import mission from '../assets/mission.png'
import value from '../assets/value.png'

const Vision = () => {
    return(
        <div>
            <Hero banner={aboutbanner} />
            <TitleSection title='Vision & Value' />  
            <div className='container max-w-[1200px] m-auto py-16 px-4'>
                            <div className=' '>
                                <div className='lg:flex '>
                                    <div className="p-4 flex flex-col cursor-pointer rounded-md">
                                        <div className='mb-4%'>
                                            <img src={mission} className="w-[50px]" alt="" />
                                        </div>
                                        <h2 className=" text-xl font-semibold mb-2%">Mission</h2>
                                        <p>To design, manufacture, and deliver exceptional environmentfriendly vehicles that exceed customer expectations while
                                            promoting sustainability and driving innovation.</p>
                                    </div>
                                    <div className="p-4 flex flex-col cursor-pointer rounded-md">
                                        <div className='mb-4%'>
                                            <img src={vision} className="w-[50px]" alt="" />
                                        </div>
                                        <h2 className=" text-xl font-semibold mb-2%">Vision</h2>
                                        <p>To make eco-friendly transportation accessible to all,
                                        revolutionizing mobility across various segments with highperformance, smart electric vehicles</p>
                                    </div>
                                    <div className="p-4 flex flex-col cursor-pointer rounded-md">
                                        <div className='mb-4%'>
                                            <img src={value} className="w-[50px]" alt="" />
                                        </div>
                                        <h2 className=" text-xl font-semibol mb-2%d">Value</h2>
                                        <p>To revolutionize the EV industry by making high-performance, zero-maintenance, and smart electric vehicles accessible to all,
                                        expanding across multiple vehicle segments.</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
        </div>
    )

}

export default Vision