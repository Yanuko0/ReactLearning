import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 1.創建store的寫法保持不變,配置好同步修改狀態的方法
const channelStore = createSlice({
    name:'channel',
    initialState:{
        channelList:[]
    },
    reducers:{
        setChannels(state, action){
            state.channelList = action.payload
        }
    }
})

//異步請求部分
// 2.單獨封裝成一個函數,在函數內部return一個新函數,在新函數
// 2.1 封裝異步請求獲取數據
// 2.2 調用同步actionCreater傳入異步數據生成一個action對象

// 3.組件中dispatch的寫法保持不變

const { setChannels } = channelStore.actions

const fetchChannlList = () =>{
    return async(dispatch) =>{
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        dispatch(setChannels(res.data.data.channels))
    }
}

export { fetchChannlList }

const reducer = channelStore.reducer

export default reducer