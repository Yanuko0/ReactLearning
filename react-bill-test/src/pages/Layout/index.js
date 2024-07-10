import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <div>
            <Outlet/>
            我是Layout
            {/* 測試全局生效樣式 */}
            <Button color="primary">測試全局</Button>
            <div className="puple">
            <Button color="primary">測試局部</Button>
            </div>
        </div>
        
    )
}

export default Layout