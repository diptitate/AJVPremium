import React from 'react'
import dealershipbanner from '../assets/dealershipbanner.jpg'
import { Link } from 'react-router-dom'


const Ctcsection = () => {
    return(
        <div className="lg:min-h-screen sm:min-h-[35vh] apply_delership overflow-hidden" style={{backgroundImage: `url(${dealershipbanner})`}}>
                
                <div className="container space-y-5 py-14 flex flex-col max-w-[1200px] md:mx-32 mx-5">

                    <h2 className=" font-semibold text-3xl leading-tight text-left">Want to be a part of <br/><b>AJV EV Dealership ?</b></h2>

                    {/* form here */}
                    <div className="flex justify-start items-start">
                        <Link to='/dealership'>
                            <button className='ajv-button uppercase px-6 py-2 w-full max-w-[150px] rounded hover:scale-110 transition-all mt-6'>Dealership</button>
                        </Link>
                    </div>
                </div>
        </div>  
    )
}
export default Ctcsection