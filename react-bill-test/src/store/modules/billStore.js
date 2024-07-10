//帳單列表相關store

import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios';

const billStore = createSlice({
    name: 'bill', // slice 的名稱
    //數據狀態state
    initialState:{
        billList:[]
    },
    reducers:{
        //同步修改的方法
        setBillList(state,action){
            state.billList = action.payload
        }
    }
})

//解構出actionCreater函數
const{ setBillList } = billStore.actions;

//編寫異步
const getBillList = () =>{
    return async(dispatch) =>{
        //編寫異步請求
        const res = await axios.get('http://localhost:8888/ka')
        //觸發同步reducer
        dispatch(setBillList(res.data))
    }
}

export{getBillList}

//導出reducer
const reducer = billStore.reducer

export default reducer