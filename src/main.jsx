import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';import AboutUs from './components/AboutUs/AboutUs';
import Contract from './components/Contract/Contract';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
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
      },
      {
        path : '/users',
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path : '/user/:userId',
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) , 
        element : <UserDetails></UserDetails>
      }
    ]
  }, 
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
