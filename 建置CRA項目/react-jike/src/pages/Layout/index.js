//測試token是否成功注入
// import { request } from "@/utils"
// import { useEffect } from "react"


// const Layout = () =>{
//     useEffect(()=>{
//         request.get('/user/profile')
//     },[])
//     return <div>this is Layout</div>
// }

// export default Layout

import { Layout, Menu, Popconfirm } from "antd"
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserInfo } from "@/store/modules/user" 

const { Header, Sider} = Layout

const items = [
    {
        label:'首頁',
        key:"/",
        icon: <HomeOutlined/>
    },
    {
        label: '文章管理',
        key:'/article',
        icon: <DiffOutlined/>
    },
    {
        label: '創建文章',
        key:'/publish',
        icon: <EditOutlined/>
    }
]

const GeekLayout = () =>{
    const navigate = useNavigate()
    const onMenuClick = (route) =>{
        // console.log("菜單被點擊了",route)
        const path = route.key
        navigate(path)
    }

    //反向高亮
    // 1.獲取當前路由路徑
    const location = useLocation()
    console.log(location.pathname)
    const selectedKey = location.pathname

    //觸發個人用戶信息actice
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUserInfo())
    },[dispatch])

    const name = useSelector(state=> state.user.userInfo.name)

    return(
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <div className="user-info">
                    <span className="user-name">{name}</span>
                    <span className="user-logout">
                        <Popconfirm title='是否確認退出?' okText="退出" cancelText="取消">
                            <LogoutOutlined />退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    theme="dark"
                    // defaultSelectedKeys={['1']}
                    selectedKeys={selectedKey}
                    onClick={onMenuClick}
                    items={items}
                    style={{ height: '100%', borderRight: 0}}></Menu>
                </Sider>
                <Layout className="layout-content" style={{padding:20}}>
                    {/* 二級路由出口 */}
                    <Outlet/>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default GeekLayout