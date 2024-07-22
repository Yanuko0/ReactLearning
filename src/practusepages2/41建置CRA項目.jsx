// 看建置CRA項目

// 1.使用CRA初始化項目環境
// npx create-react-app react-jike
// 2.按照業務規範整理項目目錄
//      文件夾         作用
//       apis          接口
//      assets        靜態資源
//    components      通用組件
//       pages       頁面級組件
//       router      路由Router
//       store        Redux狀態
//       utils         工具函數

// 統一樣式資料夾 維護起來方便

// 1.安裝scss
// npm i sass -D
// 2.測試scss嵌套語法

// style.scss → sass → style.css

// 安裝Ant Design 組件庫
// 內置常見的現成組件,可以幫助快速開發
// npm install antd --save

// 配置基礎路由Router
// 配置步驟
// 1.安裝路由包 npm i react-router-dom
// 2.準備兩個基礎路由組件 Layout 和 Login
// 3.在router/index.js 文件中引入組件進行路由配置, 導出router實例
// 4.在入口文件中渲染<RouterProvider>,傳入router實例

// 配置@別名路徑

// 通過@替代src路徑,方便開發過程中的路徑查找訪問

// 如何配置
// 1.針對路徑轉換, 修改webpack別名路徑配置craco
// 2.針對聯想提示,修改VSCode配置 jsconfig.json

// 路徑編譯配置
// 1.安裝craco 工具包
// 2.增加craco.config.js配置文建
// 3.修改 scripts 命令
// 4.測試是否生效

// 1. npm i @craco/craco -D
// 2.在根目錄下新增craco.config.js

//擴展webpack配置(寫法固定)
// const path = require('path')
// module.exports = {
//     //webpack配置
//     webpack:{
//         //配置別名
//         alias:{
//             //約定:使用 @ 表示src 文件所在路徑
//             '@' : path.resolve(__dirname, 'src')
//         }
//     }
// }

// 3.把package - scripts 前面改成 craco

// VsCode 提示配置
// 實現步驟
// 1.在項目根目錄創建 jsconfig.json配置文件
// 2.在配置文建中添加以下配置

// {
//     "compilerOptions": {
//         "baseUrl": "./",
//         "paths": {
//             "@/*":[
//                 "src/*"
//             ]
//         }
//     }
// }
