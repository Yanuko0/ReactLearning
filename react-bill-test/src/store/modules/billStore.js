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
        },
        //同步添加帳單方法
        addBill(state, action){
            state.billList.push(action.payload)
        }
    }
})

//解構出actionCreater函數
const{ setBillList, addBill } = billStore.actions;

//編寫異步
const getBillList = () =>{
    return async(dispatch) =>{
        //編寫異步請求
        const res = await axios.get('http://localhost:8888/ka')
        //觸發同步reducer
        dispatch(setBillList(res.data))
    }
}

const addBillList = (data) =>{
    return async(dispatch) => {
        //編寫異步請求
        const res = await axios.post('http://localhost:8888/ka', data)
        //觸發同步reducer
        dispatch(addBill(res.data))
    }
}

export{getBillList, addBillList}

//導出reducer
const reducer = billStore.reducer

export default reducer