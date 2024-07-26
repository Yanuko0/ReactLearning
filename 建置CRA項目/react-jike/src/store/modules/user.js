//和用戶相關的狀態管理

import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";

const userStore = createSlice({
    name: "user",
    //數據狀態
    initialState:{
        token: localStorage.getItem('token_key') || ''
    },
    //同步的修改方法
    reducers:{
        setToken(state, action) {
            state.token = action.payload
            //localstore存一份
            localStorage.setItem('token_key', action.payload)
        }
    }
})

//解構出actionCreater

const { setToken } = userStore.actions

//獲取reducer函數

const userReducer = userStore.reducer

//異步方法 完成登錄獲取token

const fetchLogin = ( loginForm ) =>{
    return async(dispatch)=>{
        //1.發送異步請求
        const res = await request.post('/authorizations', loginForm)
        //2.提交同步action進行token的存入
        dispatch(setToken(res.data.token))
    }
}

export { fetchLogin, setToken }

export default userReducer