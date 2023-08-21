import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import Statistic from "../Pages/Statistic/Statistic";
import Block from "../Pages/block/Block";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"viewdetails/:id",
                element:<ViewDetails></ViewDetails>
            },{
                path:'appliedjob',
                element:<AppliedJob></AppliedJob>
            },{
                path:'statistic',
                element:<Statistic></Statistic>
            },{
                path:'block',
                element:<Block></Block>
            }
        ]
    }
])