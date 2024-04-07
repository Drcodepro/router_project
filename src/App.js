import React from "react";
import Layout from './Layout/Layout';
import Home from './component/Home/Home';
import About from "./component//About/About";
// import {Route, RouterProvider,createBrowserRouter,createRoutesFromElement } from "react-router-dom";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import Contact from './component/ContactUs/Contact';
import User from './component/User/User';
import Github from './component/Github/Github';
import ErrorPage from "./ErrorPage/ErrorPage";


// ye sara kamm index.js (root) file me bhi kr sakte hai  jo ki kiya huaa hai
const router = createBrowserRouter([
    {path:'/',
     element:<Layout/>,
     errorElement:<ErrorPage/>,  // this will show a error on the screen
     children:[
      {
       path:"",
       element:<Home/>,
      },
      {
       path:"about",
       element:<About/>,
      },
      {
       path:"contact",
       element:<Contact/>,
      },
      {
       path:"user/:userid",// :userid  tells that here parameters will be dynamic
       element:<User/>, // in the User component we can acces this : parameters by using {usePrams}
    },
     {
      path:"github",
       element:<Github/>,
      },
     ]
    }
  ])

export default function App(){
    return (<>
    <RouterProvider router={router}/>
    </>)
}