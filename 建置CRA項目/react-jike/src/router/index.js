//路由配置
import Layout from "@/pages/Layout"; //相當於 src//pages/layout
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from '@/components/AuthRoute'
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

//配置路由實例

const router = createBrowserRouter([
    {
        path:"/",
        element: <AuthRoute><Layout/></AuthRoute>,
        children:[
            {
                // path:'home',
                index:true,
                element:<Home/>
            },
            {
                path:'article',
                element:<Article/>
            },
            {
                path:'publish',
                element:<Publish/>
            },
        ]
    },
    {
        path:"/login",
        element: <Login/>
    }
])

export default router