import React, { useState, useEffect} from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'

const AllProducts = () => {
    const[openUploadProduct, setOpenUploadProduct] = useState(false)
    const [allProduct,setAllProduct] = useState([])

    const fetchAllProduct = async() =>{
        const response = await fetch(SummaryApi.allProduct.url)
        const dataResponse = await response.json()
    
        //console.log("product data",dataResponse)
    
        setAllProduct(dataResponse?.data || [])
      }
    
      useEffect(()=>{
        fetchAllProduct()
      },[])

    return(
        <div>
            <div className='bg-white py-2 px-4 flex justify-between items-center'>
                <h2 className='font-bold text-lg'>All Products</h2>
                <button className='border py-2 px-4 rounded-full text-white bg-black hover:text-black hover:bg-white hover:border-black hover: border-spacing-2 transition-all' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
            </div>

            {/**all product */}
            <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll bg-gray-400'>
            {
                allProduct.map((product,index)=>{
                return(
                    <AdminProductCard data={product} key={index+"allProduct"} fetchData={fetchAllProduct}/>
                    
                    
                )
                })
            }
            </div>


            {/**----upload products */}
            <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
            {
                openUploadProduct && (
                    <UploadProduct onClose={()=>setOpenUploadProduct(false)} />
                )
            }
            </div>
            
        </div>
    )
}
export default AllProducts