//路由配置
import Layout from "@/pages/Layout"; //相當於 src//pages/layout
import Login from "@/pages/Login";

import AppUseReducer from "@/AppUseReducer";
import AppUseMemo from "@/AppUseMemo";
import Reactmemo from "@/AppReactmemo";

import { createBrowserRouter } from "react-router-dom";
import ReactmemoProps from "@/Reactmemo_props";
import AppUseCallBack from "@/AppUseCallback";
import AppforwardRef from "@/AppforwardRef";
import AppUseImperativeHandle from "@/AppUseImperativeHandle";





//配置路由實例

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/AppUseReducer",
        element: <AppUseReducer/>
    },
    {
        path:"/AppUseMemo",
        element: <AppUseMemo/>
    },
    {
        path:"/AppReactmemo",
        element: <Reactmemo/>
    },
    {
        path:"/Reactmemo_props",
        element: <ReactmemoProps/>
    },
    {
        path: "/AppUseCallBack",
        element: <AppUseCallBack/>
    },
    {
        path: "/AppforwardRef",
        element: <AppforwardRef/>
    },
    {
        path: "/AppUseImperativeHandle",
        element: <AppUseImperativeHandle/>
    }
])

export default router