import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Shop from './pages/Shop';
import ProductDetails from './Components/ProductDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';

function DynamicRounting()
{

  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
      
    },
    {
      path:"/About",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/Content",
      element:
      <div>
        <Navbar/>
        <Content/>  
      </div>
    },
    {
      path:"/Content/:id",
      element:
      <div>
        <Navbar/>
        <ProductDetails/>  
      </div>
    },
    {
      path:"/Shop",
      element:
      <div>
        <Navbar/>
        <Shop/>  
      </div>,
      children:[
        {
          path:"men",
          element:<Men/>
        },
        {
          path:"women",
          element:<Women/>
        },
        {
          path:"kids",
          element:<Kids/>
        }
      ]
    },
  ])
  return(
  <RouterProvider router={router}/>
)
};

export default DynamicRounting;