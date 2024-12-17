import React, { useEffect, useRef, useState } from "react"
import fetchCategoryWiseProduct from "../helpers/fetchCategoryWiseProduct"
import displayINRCurrency from "../helpers/displayCurrency"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

const CategoryWiseProductDisplay = ({category, heading}) => {

    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)

    const fetchData = async() =>{
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        console.log("horizontal data",categoryProduct.data)
        setData(categoryProduct?.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    

    return(
        <div className="container mx-auto px-4 my-6 relative">

            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-between md:gap-6 overflow-x-scroll scrollbar-none transition-all'>
                
                {
                    loading ? (
                        loadingList.map((product, index) => {
                            return(
                                <div className='w-full min-w-[350px] md:min-w-[400px] max-w-[350px] md:max-w-[400px] bg-white rounded-sm shadow'>
                        
                                    <div className='bg-slate-200 h-48 p-2 min-w-[200px] md:min-w-[180px] flex justify-center items-center rounded animate-pulse'>
                                        
                                    </div>
                                    <div className="p-4 grid gap-3 w-full">
                                        <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
                                        <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2"></p>
                                        <div className="flex gap-3">
                                            <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                                            <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                                        </div>
                                        <button className="text-sm text-white px-3 py-2 rounded bg-slate-200 w-full animate-pulse">Add to Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    ): (
                        data.map((product, index) => {
                            return(
                                <Link className='w-full min-w-[350px] md:min-w-[400px] max-w-[350px] md:max-w-[400px] bg-white rounded-sm shadow'>
                        
                                    <div className='bg-slate-200 h-48 p-2 min-w-[200px] md:min-w-[180px] flex justify-center items-center'>
                                        <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply' />
                                    </div>
                                    <div className="p-4 grid gap-3">
                                        <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">{product?.productName}</h2>
                                        <p className="capitalize text-slate-500">{product?.category}</p>
                                        <div className="flex gap-3">
                                            <p className="text-slate-500 line-through ">{ displayINRCurrency(product?.price)}</p>
                                            <p className="text-red-600 font-medium">{ displayINRCurrency(product?.sellingPrice)}</p>
                                        </div>
                                        <button className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded" onClick={(e) => addToCart(e, product?._id)}>Product Enquiry</button>
                                    </div>
                                </Link>
                            )
                        })
                    )
                    
                }
            </div>

            
            
        </div>
    )
}
export default CategoryWiseProductDisplay