import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

import router from './router';
// 1.創建router實例對象並且配置路由對應關係
// const router = createBrowserRouter([{
//   path:"/login",
//   element:<div>我是登錄</div>
// },{
//   path:"/article",
//   element:<div>我是文章頁</div>
// }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <RouterProvider router={router}></RouterProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
