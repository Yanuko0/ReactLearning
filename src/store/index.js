import { configureStore } from "@reduxjs/toolkit";
// 導入子模塊reducer
import counterReducer from "./modules/counterStore"

import channelReducer from "../store/modules/channelStore"

const store = configureStore({
    reducer:{
        counter: counterReducer,
        channel: channelReducer
    }
})



export default store