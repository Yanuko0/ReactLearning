// 基於Vite創建開發環境

// Vite是一個框架無關的前端工具鏈, 可以快速的生成一個React + TS 開發環境, 並且可以提供快速的開發體驗

// npm create vite @latest react-jike-mobild -- -- template react-ts

// 說明:
// 1.npm create vite@latest固定寫法 (使用最新版本vite初始化項目)
// 2.react-ts-pro 項目名稱 (可以自定義)
// 3.-- --template react-ts 指定項目模板為react+ts

//初始化項目  git init .
//git add . 
//git commit -m "初始化項目"

// 安裝Ant Design Mobile
// Ant Design Mobile 是 Ant Design 家族裡專門針對移動端的組件庫

// 看文檔!
// https://mobile.ant.design/zh/guide/quick-start/

// npm install --save antd-mobile

// 初始化路由
// React的路由初始化, 我們採用react-router-dom進行配置
// npm i react-router-dom

// Home  Detail

// 首先創建組件 pages > Detail跟Home 裡面的index.tsx

//創建router index.tsx 導入createBrowserRouter
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home/>,
//     },
//     {
//         path: '/detail',
//         element: <Detail/>,
//     }
// ])

//導出實例
// export { router }

// 進行路由配置

// 再到項目的路口main.tsx裡面

// 導入高階組件provider 並傳入router實例

//導入provider
// import { RouterProvider } from 'react-router-dom'
// //導入router實例
// import { router } from './router'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <RouterProvider router={router} />

// )


//----------------------------------------------

// 配置路徑別名
// 場景: 項目中各模塊之間的互相導入導出, 可以通過@別名路徑做路徑簡化, 經過配置@相當於src目錄, 比如:

// import Detail from '../pages/Detail'
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// import Detail from '@/pages/Detail'

// 步驟:
// 1.讓Vite做路徑解析(真實的路徑轉換)
// 2.讓VsCode做智能路徑提示(開發者體驗)

// 1
// vite.config

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })

// 安裝node類型包
// npm i @types/node -D

// 2
// 在tsconfig.app.json或是tsconfig.json
// compilerOptions裡面接上
// "baseUrl": ".",
//     "paths": {
//       "@/*": [
//         "src/*"
//       ]
//     },


//--------------------------------------------------------------
// 安裝axios

// 場景: axios做為最流行的請求插件, 同樣是類型友好的, 基於axios作揖些基礎的封裝

// 1.安裝axios到項目
// 2.在utils中封裝http模塊, 主要包括街口基地址、 超時時間、 攔截器
// 3.在utils中做統一導出

// npm i axios

// src > 建立utils資料夾目錄 > 新增模塊http.ts

//封裝axios

// import axios from 'axios'

// const httpInstance = axios.create({
//     baseURL: 'http://geek.itheima.net',
//     timeout: 5000,
// })

// //攔截器
// httpInstance.interceptors.request.use(
//     (config) => {
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

// httpInstance.interceptors.request.use(
//     (response) => {
//         return response
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

// export { httpInstance }

// 在utils.ts中建立index.ts

////模塊中轉導出文件

// import { httpInstance } from './http'

// export { httpInstance as http }

//-----------------------------------------------------------------------

// 封裝API模塊-axios和ts的配合使用

// 場景: axios提供了request泛型方法, 方便我們傳入類型參數推導出街口返回值的類型
// axios.request<Type>(requestConfig).then(res=>{
//     //res.data 的類型為Type
//     console.log(res.data)
// })

// 說明:泛型參數Type的類型決定了res.data的類型
// 步驟:
// 1.根據接口文檔創建一個通用的泛型接口類型 (多個街口返回值的結構是相似的)
// 2.根據接口文檔創建特有的接口數據類型(每個街口有自己特殊的數據格式)
// 3.組合1跟2的類型, 得到最終傳給request泛型的參數類型

//▼ data object{1} 響應數據
    // ▼ channels array[object{2}] 響應頻道數組
            // id integer 頻道id
            // name string 頻道名字
    //  message string 響應消息

// 接口通用泛型                                    具體街口類型
// type ResType<T> = {                          type ChannelItem = {
//     message:string,                              id:number,
//     data:T                                       name: string}
// }                                            type ChannelRes = {
//                 ↘                               //  channels: ChannelItem[]}
//                    ↘                          ↙
//                       ↘                    ↙
 // axios泛型               ↘             ↙
 //           axios.request<ResType<ChannelRes>>


 //-----------------------------------------------------------------------


//  Home模塊開發

// HomeComponents
// -----------------------------------------------
// |  -------    -------   ------    -------     |
// |  |tab1 |    | tab2|   |tab3|    | tab4|     |
// |  -------    -------   ------    -------     |
// -----------------------------------------------
// |                                             |
// |  -------    -------   ------    -------     |
// |  |     |    |     |   |     |   |     |     |
// |  | List|    | List|   | List|   | List|     |
// |  |     |    |     |   |     |   |     |     |
// |  -------    -------   ------    -------     |
// -----------------------------------------------

//--------------------------------------------------------------------------

// Home模塊-tabs區域實現
// -----------------------------------------------
// |  -------    -------   ------    -------     |
// |  |tab1 |    | tab2|   |tab3|    | tab4|     |
// |  -------    -------   ------    -------     |
// -----------------------------------------------

// 實現步驟:
// 1.使用ant-mobile 組件庫中的Tabs組件進行頁面結構創建
// 2.使用真實接口數據進行渲染
// 3.有優化的點進行優化處理

//--------------------------------------------------------------------------

// Home模塊-自定義hook函數優化(可選)

// 場景:當前狀態數據的各種操作邏輯和組件渲染是寫在一起的, 可以採用
// [自定義hook封裝的方式讓邏輯和渲染鄉分離]

// 實現步驟:
// 1.把Tabs相關的響應式數據狀態以及操作數據的方法放到hook函數中
// 2.組件中調用hook函數, 消費其返回的狀態和方法

//--------------------------------------------------------------------------

// Home模塊-List組件實現
// 實現步驟:
// 1.搭建基礎結構, 並獲取基礎數據
// 2.為組件設計 channelld 參數, 點擊tab時傳入不同的參數
// 3.實現上拉加載功能

// -------------------------
// |  -------    -------    |
// |  |tab1 |    | tab2|    |
// |  -------    -------    |
// ------↓----------↓--------
// |     ↓          ↓       |
// |  -------    -------    |
// |  |chann |   |chann|    |
// |  | elld1|   |elld2|    |
// |  | List |   |List |    |
// |  -------    -------    |
// --------------------------

//--------------------------------------------------------------------------

// Home模塊-List列表無限滾動實現

// 交互要求: list列表在滑動到底部時, 自動加載下一頁列表數據

// 實現思路:
// 1. 滑動到底部觸發加載下一頁動作
{/* <InfiniteScroll/> */}
// 2.加載下一頁數據
// pre_timestamp 接口參數
// 3.把老數據和新數據做拼接處理
// [...oldList, ...newList]
// 4.停止監聽邊界值
// hasMore

//--------------------------------------------------------------------------

// 詳情模塊-路由跳轉&數據渲染

// 需求點擊列表中的某一項跳轉到詳情路由併顯示當前文章
// 1.通過路由跳轉方法進行跳轉, 並傳遞參數
// 2.在詳情路由下獲取參數, 並請求數據
// 3.渲染數據到頁面中

// 根據接口文檔封裝接口Type  -> 傳遞給axios.requesr泛型參數

//--------------------------------------------------------------------------