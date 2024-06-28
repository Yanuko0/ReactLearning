/* eslint-disable no-lone-blocks */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// 導入actionCreater
import {inscrement, decrement} from "../store/modules/counterStore"

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

// React組件中修改store中數據
// 要使用useDispatch 他的作用是生成提交action對象的dispatch函數

export default function ReduxCount() {
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
    </div>
  )
}

// 1.組件中使用哪個hook函數獲取store中的數據
// useSelector

// 2.組件使用哪個hook函數獲取dispatch方法
// useDispatch

// 3.如何得到要提交的action對象
// 執行store模塊中倒出的acrionCreater方法
