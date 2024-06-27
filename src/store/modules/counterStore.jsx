import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
    name:'counter',
    //初始化state
    initialState:{
        count:0
    },
    //修改數據的方法
    // 同步方法 支持直接修改
    reducers:{
        inscrement(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    }
})

// 解構出來actionCreater函數
const {inscrement , decrement} = counterStore.actions
// 獲取reducer
const reducer = counterStore.reducer

// 以按需導出的方式倒出actionCreater
export {inscrement, decrement}
// 以默認倒出的方式倒出reducer

export default reducer