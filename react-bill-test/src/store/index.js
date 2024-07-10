//組合子模塊  導出store實例

import { configureStore } from "@reduxjs/toolkit"
import billReducer from "./modules/billStore"

const store = configureStore({
    reducer:{
       bill: billReducer 
    }
})

export default store