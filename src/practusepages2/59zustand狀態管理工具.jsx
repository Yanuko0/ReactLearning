// zustand極簡狀態管理工具
// zustand-快速上手

// npm i zustand


//  創建store       綁定到組件
//  狀態數據        =========>      component
//  操作方法                       消費數據和方法

//zustand
// import { create } from 'zustand'

// //1. 創建store
// //語法容易出錯
// //1.函數參數必須返回一個對象, 對象內部編寫狀態數據和方法
// //2. set用來修改數據的狀態的專門方法, 必須調用它來修改數據
// //語法1: 參數是函數 需要用到老數據的場景
// //語法2: 參數直接是一個對象 set({ count: 100 })

// const useStore = create((set) => {
//     return {
//         //狀態數據
//         count: 0,
//         //修改狀態數據的方法
//         inc:() => {
//             set((state) => ({count: state.count + 1 }))
//             // set({ count: 100 })
//         }
//     }
// })

// //2. 綁定store到組件
// //useStore => 返回是一個對象{ 數據 , 修改數據的方法}

// function Zustand () {
//     const { count, inc} = useStore()
//     return (
//         <>
//             <button onClick={inc}>{count}</button>
//         </>
//     )
// }

//-----------------------------------------------------------------------------------

// zustand - 異步支持
// 對於異步的支持不需要特殊的操作, 直接在函數中編寫一步的邏輯, 最後只需要調用set方法傳入新狀態即可

// const useStore = create((set) => {
//     return {
//         //狀態數據
//         channelList: [],
//         //異步方法
//         fetchChannelList: async () => {
//             const res = await fetch(URL)
//             const jsonData = await res.json()
//             //調用set方法更新狀態
//             set({
//                 channelList: jsonData.data.channels
//             })
//         }
//     }
// })

// //zustand
// import { useEffect } from 'react'
// import { create } from 'zustand'
// const URL = 'http://geek.itheima.net/v1_0/channels'

// //1. 創建store
// //語法容易出錯
// //1.函數參數必須返回一個對象, 對象內部編寫狀態數據和方法
// //2. set用來修改數據的狀態的專門方法, 必須調用它來修改數據
// //語法1: 參數是函數 需要用到老數據的場景
// //語法2: 參數直接是一個對象 set({ count: 100 })

// const useStore = create((set) => {
//     return {
//         //狀態數據
//         count: 0,
//         //修改狀態數據的方法
//         inc:() => {
//             set((state) => ({count: state.count + 1 }))
//             // set({ count: 100 })
//         },
//         channelList: [],
//         fetchGetList: async () => {
//             const res = await fetch(URL)
//             const jsonRes = await res.json()
//             console.log(jsonRes)
//             set({
//                 channelList: jsonRes.data.channels
//             })
//         }
//     }
// })

// //2. 綁定store到組件
// //useStore => 返回是一個對象{ 數據 , 修改數據的方法}

// function Zustand異步支持 () {
//     const { count, inc , fetchGetList, channelList} = useStore()

//     useEffect(()=>{
//         fetchGetList()
//     },[fetchGetList])
    
//     return (
//         <>
//             <button onClick={inc}>{count}</button>
//             <ul>
//                 {
//                     channelList.map(item => <li key={item.id}>{item.name}</li>)
//                 }
//             </ul>
//         </>
//     )
// }

//-----------------------------------------------------------------------------------

// zustand-切片模式(優化手段)

// 場景: 當單個store比較大的時候, 可以采用 切片模式 進行模塊拆分組合, 類似於模塊化

// srote → countStore →  rootStore  => component
//      ↘              ↗ 
//         channelStore 


// //創建counter相關切片
// const createCounterStore = (set) => {
//     return {
//         count: 0,
//         setCount: () => {
//             set(state => ({ count: state.count + 1}))
//         }
//     }
// }

// //創建channel相關切片
// const createChannelStore = (set) => {
//     return {
//         channelList: [],
//         fetchGetList: async () => {
//             const res = await fetch(URL)
//             const jsonData = await res.json()
//             set({ channelList: jsonData.data.channles})
//         }
//     }
// }

// //組合切片
// const useStore = create((...a) => ({
//     ...createCounterStore(...a),
//     ...createChannelStore(...a)
// }))

// //組件使用

// function Zustand拆分並組合切片 () {
//     const { count, inc , fetchGetList, channelList} = useStore()

//     useEffect(()=>{
//         fetchGetList()
//     },[fetchGetList])
    
//     return (
//         <>
//             <button onClick={inc}>{count}</button>
//             <ul>
//                 {
//                     channelList.map(item => <li key={item.id}>{item.name}</li>)
//                 }
//             </ul>
//         </>
//     )
// }

// export default Zustand拆分並組合切片