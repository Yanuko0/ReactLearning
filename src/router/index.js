import Login from "../pages/Login";
import Article from "../pages/Article";
import { createBrowserRouter } from "react-router-dom";
import LayoutP from "../pages/Layout";
import Board from "../pages/Board";
import About from "../pages/About";


const router = createBrowserRouter([
    // 一級
    {
        path:"/",
        element: <LayoutP/>,
        children:[
            // 兩個二級
            {
                path:'board',
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
])

export default router