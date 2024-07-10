import { Button, TabBar } from "antd-mobile"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { getBillList } from "@/store/modules/billStore"
import { divide } from "lodash"
import './index.scss'
import{
    BillOutline,
    AddCircleOutline,
    CalculatorOutline
} from 'antd-mobile-icons'


const tabs = [
    {
        key: '/month',
        title: '月度帳單',
        icon: <BillOutline/>
    },
    {
        key: '/new',
        title: '記帳',
        icon: <AddCircleOutline/>
    },
    {
        key: '/year',
        title: '年度帳單',
        icon: <CalculatorOutline/>
    },
]

const Layout = () =>{
    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(getBillList())
    },[dispatch])

    //切換菜單跳轉路由
    const navigate = useNavigate()

    const swithRoute = (path) =>[
        navigate(path)
    ]

    return(
        // <div>
        //     <Outlet/>
        //     我是Layout
        //     {/* 測試全局生效樣式 */}
        //     <Button color="primary">測試全局</Button>
        //     <div className="puple">
        //     <Button color="primary">測試局部</Button>
        //     </div>
        // </div>
        <div className="layout">
            <div className="container">
                <Outlet/>
            </div>
            <div className="footer">
                <TabBar onChange={swithRoute}>
                    {tabs.map(item => (
                      <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>  
                    ))}
                </TabBar>
            </div>
        </div>
        
    )
}

export default Layout