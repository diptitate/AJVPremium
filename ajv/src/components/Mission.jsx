import { CheckCircle2 } from "lucide-react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import pitchDesk from '../assets/pitchdesk.webp'

const Mission = () => {
    return(
        <div className="mx-auto py-4 px-6 my-6 bg-slate-200" style={{backgroundImage: `url(${pitchDesk})`}}>
            
            {/*-------------
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <div className="flex mt-10 justify-center">
                        <video
                        autoPlay
                        loop
                        muted
                        className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
                        >
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <video
                        autoPlay
                        loop
                        muted
                        className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
                        >
                        <source src={video2} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                </div>
            </div>
            -------*/}

            <div className='flex lg:flex-col md:flex-row h-full overflow-hidden'>   

                    {/*---------First part-----------*/}
                    <div className='flex lg:flex-row md:flex-col py-[3%]'>
                        <div className="p-5 item-center">
                            <video
                                autoPlay
                                loop
                                muted
                                className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400 my-4"
                            >
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full pt-[5%] items-center">
                            <div className="flex pb-2">
                                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <CheckCircle2 />
                                </div>
                                <p className="text-md text-neutral-500">Urban Commuters</p>
                            </div>
                            <div className="flex pb-2">
                                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <CheckCircle2 />
                                </div>
                                <p className="text-md text-neutral-500">Environmentally Conscious Consumers
                                </p>
                            </div>
                            <div className="flex">
                                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <CheckCircle2 />
                                </div>
                                <p className="text-md text-neutral-500">Commercial Fleets
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------second part-----------*/}
                    <div className='flex flex-row py-[3%]'>
                        <div className="w-full pt-[5%]">
                            <div className="flex pb-2">
                                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <CheckCircle2 />
                                </div>
                                <p className="text-md text-neutral-500">Young Professionals and Tech Enthusiasts</p>
                            </div>
                            <div className="flex">
                                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <CheckCircle2 />
                                </div>
                                <p className="text-md text-neutral-500">Ride-Sharing and Mobility Companies</p>
                            </div>
                        </div>
                        <div className="p-5">
                            <video
                                autoPlay
                                loop
                                muted
                                className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400 my-4"
                            >
                            <source src={video2} type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
 

            </div>                     
        </div>
    )
}
export default Mission