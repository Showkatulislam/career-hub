import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import Statistic from "../Pages/Statistic/Statistic";
import Block from "../Pages/block/Block";
import Login from "../Pages/Login/Login";
import Register from "../Pages/createUser/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>
            },{
                path:'statistic',
                element:<PrivateRoute><Statistic></Statistic></PrivateRoute>
            },{
                path:'block',
                element:<PrivateRoute><Block></Block></PrivateRoute>
            },{
                path:"login",
                element:<Login></Login>
            },{
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])