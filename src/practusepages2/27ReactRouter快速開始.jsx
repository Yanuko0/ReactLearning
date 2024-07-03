// import { router } from 'json-server'
import React from 'react'

// 什麼是前端路由
// 一個路徑path對應一個組件component當我們在瀏覽器訪問一個path的時候
// path對應的組件會在頁面中進行渲染

// 創建一個可以切換登錄和文章頁的路由系統

// 這邊本該放在index因為練習放這邊
// import { createBrowserRouter ,RouterProvider} from 'react-router-dom';import reportWebVitals from './reportWebVitals';

// 1.創建router實例對象並且配置路由對應關係
// const router = createBrowserRouter([{
//     path:"/login",
//     element:<div>我是登錄</div>
// },{
//     path:"/article",
//     element:<div>我是文章頁</div>
// }
// ])

// const router = createBrowserRouter([{
//     path:"/login",
//     element:<div>我是登錄</div>
//   },{
//     path:"/article",
//     element:<div>我是文章頁</div>
//   }
//   ])
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//         <RouterProvider router={router}></RouterProvider>
//     </React.StrictMode>
//   );

// 抽象路由模塊

// page/  Login Article
//          ↓
// router(引入組件配置path - component)
//          ↓
// 應用入口文件渲染RouterProcider(注入router實例)

// import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

// import router from './router';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Provider store={store}> */}
//       {/* <App /> */}
//       <RouterProvider router={router}></RouterProvider>
//     {/* </Provider> */}
//   </React.StrictMode>
// );


export default function ReactRouter() {
  return (
    <div>
        <p>因為不可能在路口文件直接配置所以拆開來放各種資料夾並將路由綁定</p>
        <p>1.pages中分別建立Article和Login資料夾</p>
        <p>並創建index.js</p>
        <p>2.建立router資料夾創建index.js</p>
        <p>並將Article和Login引入</p>
        <p>3.在最外層的index.js引入router資料夾中的router實現路由切換</p>
    </div>
  )
}
