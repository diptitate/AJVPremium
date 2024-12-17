import React from 'react'

const TitleSection = (props) => {
    return(
        <div className="mx-auto py-4 px-6 mb-6 bg-slate-200">

            <h2 className='text-4xl sm:text-2xl lg:text-4xl  mt-6 tracking-wide font-medium py-4'>
                {props.title}
            </h2>
        </div> 
    )
}
export default TitleSection