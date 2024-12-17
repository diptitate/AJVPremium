import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Button from "../components/Button";
import img from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux";
import SummaryApi from "../common";
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from "../common/role";

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menu, setMenu] = useState(false)

  const [menuDisplay,setMenuDisplay] = useState(false)

  const navigate = useNavigate()

  //console.log('user header', user)

  const handlelogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }

  }
  const handleChange = () => {
    setMenu(!menu);
  };

 const backgroundColor = `bg-white`;

  return (

      <header className="h-17 shadow-md w-full sticky top-0 left-0 z-50 bg-white opacity-1">
        <div className=" flex flex-row items-center justify-between p-5 md:px-32 px-5 bg-ride-900">
          <div className=" flex items-center">
   
            <Link to="/">
            <img src={img} alt="img" className="w-[60px]"/>  
            </Link>

            
          </div>
          <nav className="hidden lg:flex flex-row items-center gap-14">
            <Link to="/" className="hover:text-brightColor cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="hover:text-brightColor cursor-pointer">
              About Us
            </Link>
            <Link to="/services" className=" hover:text-brightColor cursor-pointer">
              Service
            </Link>
            <Link
              to="/vision" className=" hover:text-brightColor cursor-pointer">
              Vision
            </Link>
            <Link
              to="/dealership" className=" hover:text-brightColor cursor-pointer">
              Dealership
            </Link>
            <Link
              to="/contact" className=" hover:text-brightColor cursor-pointer">
              Contact Us
            </Link>
            

          </nav>

          
          <div className="hidden lg:flex flex-row items-center gap-4">
            {/*------
            <Link 
              to='' className="text-3xl">
                <FaShoppingCart/>
            </Link>
            --*/}
            <div>
              {
                user?._id ? (
                  <button onClick={handlelogout} className='px-3 py-1 rounded-full border bg-black text-white'>Logout</button>
                ) : (
                  <Link to={"/login"} className='px-3 py-1 rounded-full border bg-black text-white'>Login</Link>
                )}
            
            </div>


            <div className="relative group flex justify-center">
              {
                user?._id && (
                  <div className="cursor-pointer relative flex justify-center" onClick={() => setMenuDisplay(prev => !prev)}>
                    {
                      user?.profilePic ? (
                        <img src={user?.profilePic} className="w-10 h-10 rounded-full" 
                          alt={user.name} />
                        ) : (
                        <Link 
                          to='/login' className="text-3xl">
                          <FaRegUserCircle />
                        </Link>
                      )
                    }
                
                  </div>
                )
              }
              
              {
                menuDisplay && (
                  <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                    <nav>
                    {
                      user?.role === ROLE.ADMIN && (
                        <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(prev => !prev)}>Admin Panel</Link>
                      )
                    }
                      

                    </nav>
                  </div>
                )
              }
              
            </div>

            

          </div>
          

          <div className=" lg:hidden flex items-center p-2" onClick={handleChange}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden bg-white flex flex-col absolute  bg-ride-900 left-0 top-20 text-center pt-8 pb-4 gap-2 w-full h-fit transition-transform duration-300`}
          onClick={handleChange}>
          <Link to="/" className=" hover:text-brightColor cursor-pointer">Home</Link>
          <Link to="/about" className=" hover:text-brightColor cursor-pointer">About Us</Link>
          <Link to="/services" className=" hover:text-brightColor cursor-pointer">Service</Link>
          <Link to="/vision" className=" hover:text-brightColor cursor-pointer">Vision</Link>
          <Link to="/dealership" className=" hover:text-brightColor cursor-pointer">Dealership</Link>
          <Link to="/contact" className=" hover:text-brightColor cursor-pointer">Contact Us</Link>
          
          <div className="flex flex-col lg:hidden lg:flex-row items-center gap-4">
          <div className="">
              {
                user?.profilePic ? (
                  <img src={user?.profilePic} className="w-10 h-10 rounded-full" 
                    alt={user.name} />
                ) : (
                  <Link 
                     to='/login' className="text-3xl">
                    <FaRegUserCircle />
                  </Link>
                )
              }
              
            </div>
            
            <Link to={"/login"} className='px-3 py-1 rounded-full text-black  hover:bg-red-700'>Login</Link>
            
          </div>
        </div>
      </header>

  );
};

export default Header;