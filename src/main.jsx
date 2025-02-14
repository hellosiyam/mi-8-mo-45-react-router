import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';import AboutUs from './components/AboutUs/AboutUs';
import Contract from './components/Contract/Contract';
;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path : '/about',
        element : <AboutUs></AboutUs>
      },
      {
        path : '/contract',
        element : <Contract></Contract>
      }
    ]
  }, 
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
