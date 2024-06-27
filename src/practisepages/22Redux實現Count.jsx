/* eslint-disable no-lone-blocks */
import React from 'react'


// Redux store配置                             React組件
//
// 1.                    ----->         ----->注入store(react-redux)
// 配置counterStore模塊   ----->  store        使用store中的數據
//                       ----->               修改store中的數據
// 2.   
// 配置根store並組合
// counterStore模塊

// 步驟1
// 使用React Toolkit創建counterStore

// 步驟2
// 為react注入store

// 再最外面的index.js中引入

// import store from './store';
// import { Provider } from 'react-redux';
// 再用Provider把他們包起來

{/* 
<React.StrictMode>
<Provider store={store}>
  <App />
</Provider>
</React.StrictMode> */
}

// 用鉤子函數useSelector 把store中的數據映射到組件中

export default function ReduxCount() {
  return (
    <div>
      
    </div>
  )
}
