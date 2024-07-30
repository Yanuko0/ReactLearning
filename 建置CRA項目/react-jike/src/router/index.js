//路由配置
import Layout from "@/pages/Layout"; //相當於 src//pages/layout
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from '@/components/AuthRoute'
// import Home from "@/pages/Home";
// import Article from "@/pages/Article";
// import Publish from "@/pages/Publish";
import { lazy, Suspense } from "react";

//1. lazy函數對組件進行導入

const Home = lazy(()=> import('@/pages/Home'))
const Article = lazy(()=> import('@/pages/Article'))
const Publish = lazy(()=> import('@/pages/Publish'))

//配置路由實例

const router = createBrowserRouter([
    {
        path:"/",
        element: <AuthRoute><Layout/></AuthRoute>,
        children:[
            {
                // path:'home',
                index:true,
                element:<Suspense fallback={'加載中'}><Home/></Suspense>
            },
            {
                path:'article',
                element:<Suspense fallback={'加載中'}><Article/></Suspense>
            },
            {
                path:'publish',
                element:<Suspense fallback={'加載中'}><Publish/></Suspense>
            },
        ]
    },
    {
        path:"/login",
        element: <Login/>
    }
])

export default router