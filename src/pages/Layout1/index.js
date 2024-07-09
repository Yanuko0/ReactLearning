import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return (
        <div>
           
            我是一級路由layout組件
           {/* <Link to='/board'>面板</Link> */}
           {/* 默認二級路由設置 */}
           <Link to='/'>面板</Link>
           <Link to='/about'>關於</Link>
            {/* 配置二級路由的出口 */}
            <Outlet/>
        </div>
    )
}

export default Layout