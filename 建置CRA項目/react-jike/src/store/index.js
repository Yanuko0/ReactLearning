//組合redux子模塊 + 導出 store 實例

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";

export default configureStore({
    reducer:{
        user: userReducer
    }
})