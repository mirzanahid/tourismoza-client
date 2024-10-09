import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import Home from "../pages/Home/Home";
import Root from "../root/Root";

import {
    createBrowserRouter,
  } from "react-router-dom";


const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Root></Root> ,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/addTouristSpot',
                element: <AddTouristSpot></AddTouristSpot>
            }
        ]
    }
]);



export default router
