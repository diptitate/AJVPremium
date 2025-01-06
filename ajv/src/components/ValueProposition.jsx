import React from "react"
import enhancing from '../assets/enhancing.png'
import charging from '../assets/charging.png'
import { GrVmMaintenance } from "react-icons/gr";
import { IoBatteryChargingOutline } from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlineDriveEta } from "react-icons/md";
import TitleSection from "./TitleSection";
import model1 from '../assets/model1.jpg'
import model2 from '../assets/model2.jpg'
import model3 from '../assets/model3.jpg'
import model4 from '../assets/model4.jpg'
import model5 from '../assets/model5.jpg'


const ValueProposition = () => {
    return(
        <div>
            <TitleSection title='Value Proposition' />  
            <div className='container max-w-[1200px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
                
                {/* Left Side */}
                <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                    <img
                    className='row-span-3 object-cover w-full h-full p-2'
                    src={model1}
                    alt='/'
                    />
                    <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src={model2}
                    alt='/'
                    />
                    <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src={model3}
                    alt='/'
                    />
                    <img
                    className='row-span-3 object-cover w-full h-full p-2'
                    src={model4}
                    alt='/'
                    />
                    <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src={model5}
                    alt='/'
                    />
                </div>

                {/* Right Side */}
                <div className='flex flex-col h-full justify-center'>
                    
                    <div className="m-4">
                                        
                                    <div className=''>
                                        <div className='flex flex-row items-center py-[3%]'>
                                            <img src={enhancing} className=''/>
                                            <p className='px-[2%]'><span className='font-semibold'>Zero Maintenance Promise: </span>
                                            Designed with durability and efficiency in mind, our electric vehicles require minimal maintenance, significantly reducing
                                            long-termownershipcosts.</p>
                                        </div>
                                        <div className='flex flex-row items-center py-[3%]'>
                                            <img src={charging} className=''/>
                                            <p className='px-[2%]'><span className='font-semibold'>Sustainable Battery Lifecycle
                                            : </span>We provide not only longer-lasting batteries but also environmentally responsible disposal options</p>
                                        </div>
                                        <div className='flex flex-row items-center py-[3%]'>
                                            <img src={enhancing} className=''/>
                                            <p className='px-[2%]'><span className='font-semibold'>Enhanced Driving Experience: </span>Our electric vehicles require minimal maintenance, significantly
                                                reducing long-termownershipcosts.</p>
                                        </div>
                                        
                                    </div>
                                </div>
                    <div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ValueProposition