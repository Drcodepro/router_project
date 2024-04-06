import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout/Layout';
import Home from './component/Home/Home';
import About from "./component//About/About";
import reportWebVitals from './reportWebVitals';
// import {Route, RouterProvider,createBrowserRouter,createRoutesFromElement } from "react-router-dom";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import Contact from './component/ContactUs/Contact';
import User from './component/User/User';

const router = createBrowserRouter([
  {path:'/',
   element:<Layout/>,
   children:[
    {path:"",
     element:<Home/>
    },
    {path:"about",
     element:<About/>
    },
    {path:"contact",
     element:<Contact/>
    },
    {path:"user/:userid",// :userid  tells that here parameters will be dynamic
    element:<User/> // in the User component we can acces this : parameters by using {usePrams}
   },
   ]
  }
])

///  another wayyyyyy

// this method some time gives error if createRoutesFromElement not present in the current 
// version of Router dom that we are using in the project

// const router = createBrowserRouter(
//   createRoutesFromElement(
//     <Route path="/" element={<Layout/>}>
//       <Route path="" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" element={<Contact/>}/>

//     </Route>
//   )
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
