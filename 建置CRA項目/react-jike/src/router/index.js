//路由配置
import Layout from "@/pages/Layout"; //相當於 src//pages/layout
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from '@/components/AuthRoute'

//配置路由實例

const router = createBrowserRouter([
    {
        path:"/",
        element: <AuthRoute><Layout/></AuthRoute>
    },
    {
        path:"/login",
        element: <Login/>
    }
])

export default router