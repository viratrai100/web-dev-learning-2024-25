import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './compnents/About';
import Dashboard from './compnents/Dashboard';
import Home from './compnents/Home';
import Navbar from './compnents/Navbar';
import ParamComp from './compnents/ParamComp';
import Courses from './compnents/Courses';
import MockTest from './compnents/MockTest';
import Reports from './compnents/Reports';
import NotFound from './compnents/NotFound';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },

    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mock-tests',
          element:<MockTest/>
        },
        {
          path:'reports',
          element:<Reports/>
        },
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
)
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <Navbar/>
  )
}

export default App
