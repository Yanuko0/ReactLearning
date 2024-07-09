import Login from "../pages/Login";
import Article from "../pages/Article";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "../pages/Layout1";
import Board from "../pages/Board";
import About from "../pages/About";
import NotFound from "../pages/NotFound"


const router = createBrowserRouter([
// const router = createHashRouter([
    // 一級
    {
        path:"/",
        element: <Layout/>,
        children:[
            // 兩個二級
            {
                // path:'board',
                // element: <Board/>

                //只要改成這樣就會變成默認二級路由
                //希望一級路由訪問時,也能得到渲染
                index:true,
                element: <Board/>
            },
            {
                path:'about',
                element: <About/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    // {
    //     path:'/article',
    //     element:<Article/>
    // },
    // {
    //     path:'/article/:id',
    //     element:<Article/>
    // },
    {
        path:'/article/:id/:name',
        element:<Article/>
    },
    {
        //當路徑無法匹配他就會匹配到這裡
        path:"*",
        element:<NotFound/>
    }

])

export default router