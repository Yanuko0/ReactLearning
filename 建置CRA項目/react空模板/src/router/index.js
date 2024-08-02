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
import Zustand from "@/Zustand狀態管理";
import Zustand異步支持 from "@/Zustand異步支持";
import Zustand拆分並組合切片 from "@/Zustand拆分並組合切片";





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
    },
    {
        path: "/Zustand",
        element: <Zustand/>
    },
    {
        path: "/Zustand異步支持",
        element: <Zustand異步支持/>
    },
    {
        path: "/Zustand拆分並組合切片",
        element: <Zustand拆分並組合切片/>
    }
])

export default router