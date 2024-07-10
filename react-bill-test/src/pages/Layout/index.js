import { Button } from "antd-mobile"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { getBillList } from "@/store/modules/billStore"

const Layout = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBillList())
    },[dispatch])

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