import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Vision from "./pages/Vision.jsx";
import Dealership from "./pages/Dealership.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ForgotPassoword from "./pages/ForgotPassoword.jsx";
import SignUp from "./pages/SignUp.jsx";
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import CategoryProduct from "./pages/CategoryProduct.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";




//import router from './routes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: '/vision',
        element: <Vision />
      },
      {
        path: '/dealership',
        element: <Dealership />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/forgot-password',
        element : <ForgotPassoword/>
    },
    {
        path : '/sign-up',
        element : <SignUp/>
    },
    {
        path: 'product-category/:categoryName',
        element : <CategoryProduct/>
    },
    {
        path : 'product/:id',
        element : <ProductDetails />
    },
    {
      path : '/admin-panel',
      element : <AdminPanel />,
      children : [
        {
          path : "all-users",
          element : <AllUsers />
        },
        {
          path : "all-products",
          element : <AllProducts />
        }
      ]
  },
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <StrictMode>
    <Provider store={store}>
    
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
