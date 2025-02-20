import React,{ useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from  './components/Footer.jsx'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './common/index.jsx';
import Context from './context/index.js';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice.js';
import ScrollToTop from './components/ScrollToTop.jsx';



function App() {

  const dispatch = useDispatch()

  const fetchUserDetails = async() => {

      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method : SummaryApi.current_user.method,
        credentials : 'include'
      })

      const dataApi = await dataResponse.json()

      if(dataApi.success){
        dispatch(setUserDetails(dataApi.data))
      }

      // console.log('data-user', dataResponse)
  }

  useEffect(() => {

    fetchUserDetails()

  }, [])

  return (
    <div className=''>
      <ScrollToTop />
      <Context.Provider value={{
          fetchUserDetails// user detail fetch
      }} >
        <ToastContainer position='top-center'/>
        <Header />
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </div>
  )
}



export default App
