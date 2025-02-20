import React, { useState, useEffect } from 'react'

import trickstar_banner from '../assets/banner/trickstar_banner.jpg'
import striker_banner from '../assets/banner/striker_banner.jpg'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)

    const desktopImages = [

        trickstar_banner,
        striker_banner
    ]

    const mobileImages = [

        trickstar_banner,
        striker_banner
    ]

    const nextImage = () =>{
        if(desktopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () =>{
        if(currentImage != 0){
            setCurrentImage(preve => preve - 1)
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length - 1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }
        },5000)

        return ()=> clearInterval(interval)
    },[currentImage])

    return(
        <div className='mx-auto rounded'>
            <div className='w-full bg-slate-200 relative'>
                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                    <div className='flex justify-between w-full text-3xl'>
                        

                    <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                    <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
                    
                    </div>
                    
                </div>
                <div className='flex h-full w-full overflow-hidden'>
                    {
                        desktopImages.map((imageURL, index) => {
                            return(
                                <div className='min-w-full min-h-full transition-all' key={imageURL} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                    <img src={imageURL} className='w-full h-full object-cover'/>
                                </div>
                            )
                        })
                    }
                </div>
                
                
                

            </div>
        </div>
    )
}
export default BannerProduct