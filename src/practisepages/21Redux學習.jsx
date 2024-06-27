import React from 'react'

// Redux是React中最常用的集中狀態管理工具
// 可以獨立於框架運行
// 作用:通過集中管理的方式管理應用的狀態

// 使用步驟
// 1.定義一個reducer函數(根據當前想要做的修改返回一個新的狀態)
// 2.使用createStore方法傳入reducer函數 生成一個store實例對項
// 3.使用store實例的subscribe方法 訂閱數據的變化(一但數據變化,可得到通知)
// 4.使用store實例的dispatch方法提交action對項 觸發數據變化(告訴reducer妳想怎麼改數據)
// 5.使用store實例的 getState方法 獲取最新的狀態數據更新到視圖中

// action → Reducer → state
//     ↖               ↙
//          view(視圖)

// Redux把整個數據修改流程分成三個核心概念
// 分別是 state action reducer
// state - 一個對象存放著我們管理的數據狀態
// action - 一個對象用來描述妳想怎麼改數據
// reducer - 一個函數更具action的描述生成一個新的state

// Redux Toolkit(RTK) 簡化Redux書寫
// react-redux 用來連接Redux跟React組件

// npm i @reduxjs/toolkit react-redux 

// Store目錄結構設計
// store ---> modules ---> channelStore.js
//    |            |--------> counterStore.js
//    |
//    |-------->index.js


export default function LeadingRedux() {
  return (
    <div>
      
    </div>
  )
}
