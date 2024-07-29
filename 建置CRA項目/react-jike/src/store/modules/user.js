//和用戶相關的狀態管理

import { createSlice } from "@reduxjs/toolkit";
import { removeToken, request } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils";
import { loginAPI, getProfileAPI } from "@/apis/user";

const userStore = createSlice({
    name: "user",
    //數據狀態
    initialState:{
        // token: localStorage.getItem('token_key') || ''
        tokan: getToken() || '',
        userInfo:{}
    },
    //同步的修改方法
    reducers:{
        setToken(state, action) {
            state.token = action.payload
            //localstore存一份
            // localStorage.setItem('token_key', action.payload)
            _setToken(action.payload)
        },
        setUserInfo(state, action){
            state.userInfo = action.payload
        },
        clearUserInfo(state){
            state.tokan = ""
            state.userInfo = {}
            removeToken()
        }
    }
})

//解構出actionCreater

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

//獲取reducer函數

const userReducer = userStore.reducer

//異步方法 完成登錄獲取token

const fetchLogin = ( loginForm ) =>{
    return async(dispatch)=>{
        //1.發送異步請求
        // const res = await request.post('/authorizations', loginForm)
        const res = await loginAPI(loginForm)
        //2.提交同步action進行token的存入
        dispatch(setToken(res.data.token))
    }
}

//獲取個人用戶信息異步方法
const fetchUserInfo = (  ) =>{
    return async(dispatch)=>{
        // const res = await request.get('/user/profile')
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}

export { fetchLogin, fetchUserInfo, clearUserInfo, setToken }

export default userReducer