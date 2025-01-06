import React from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelopeSquare, FaMapMarkerAlt, FaPhoneSquareAlt, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
  
      <div className="footer bg-[#4a4545] text-[#fff]">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 text-ride-400">
          <div className=" w-full md:w-1/4">
            <h1 className=" font-semibold text-xl pb-4"></h1>
            <img src={logo} className="w-[50%] md:w-[25%] sm:w-[25%] max-sm:w-[25%]"/> <br/>
            <p className="text-ride-400 text-white text-[15px]">
            AJV provides cost effective, focused on e-mobility and community service.
            </p>
          </div>
          <div className="">
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
              Quick Links
            </h1>
            <nav className="flex flex-col gap-2">
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
          
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Information</h1>
            <ul className="space-y-2 text-lg">
              <li className="flex items-center cursor-pointer hover:text-secondary duration-200">
                <a href="">
                  <FaPhoneSquareAlt className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
                <span className="py-2 px-2">+91 7875463662</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-secondary duration-200">
                <a href="">
                  <FaEnvelopeSquare className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
                <span className="py-2 px-2">ajvautomotivespvtltd@gmail.com</span>
              </li>
              <li className="items-baseline flex cursor-pointer hover:text-secondary duration-200">
                <a href="">
                  <FaMapMarkerAlt className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
                <span className="py-2 px-2">Shop No. G/15, Gr Floor, Alice Appts. <br />Nr. Rto,
                Fatorda, South Goa, Salcete,<br /> Goa, India, 403602</span>
                
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Social Media</h1>
            <ul className="text-lg flex flex-row">
              <li className="flex items-center cursor-pointer hover:text-secondary duration-200 mr-2">
                <a href="">
                    <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
              </li>  
              <li className="flex items-center cursor-pointer hover:text-secondary duration-200 mr-2">
                < a href="">
                  <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
              </li>
              <li className="flex items-center cursor-pointer hover:text-secondary duration-200 mr-2">
                <a href="">
                    <FaFacebookSquare className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
              </li>  
              <li className="flex items-center cursor-pointer hover:text-secondary duration-200">
                <a href="">
                    <FaTwitter className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
              </li>  
                          
            </ul>
          </div>
        </div>
        
      </div>
  
    );
  };
  
  export default Footer;