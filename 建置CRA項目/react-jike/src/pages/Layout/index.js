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
    HomeQutlined,
    DiffOutlined,
    EditOutLined,
    LogoutOutLined,
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider} = Layout

const items = [
    {
        label:'首頁',
        key:"1",
        // icon: <HomeQutlined/>
    },
    {
        label: '文章管理',
        key:'2',
        icon: <DiffOutlined/>
    },
    {
        label: '創建文章',
        key:'3',
        // icon: <EditOutLined/>
    }
]

const GeekLayout = () =>{
    return(
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <div className="user-info">
                    <span className="user-name">柴柴老師</span>
                    <span className="user-logout">
                        <Popconfirm title='是否確認退出?' okText="退出" cancelText="取消">
                            {/* <LogoutOutLined />退出 */}
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{ height: '100%', borderRight: 0}}></Menu>
                </Sider>
                <Layout className="layout-content" style={{padding:20}}>
                    內容
                </Layout>
            </Layout>
        </Layout>
    )
}

export default GeekLayout