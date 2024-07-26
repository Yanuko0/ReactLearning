//封裝高階組件

import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"

//核心邏輯: 有token 正常跳轉  無token 去登錄

export function AuthRoute({children}){
    const token = getToken()
    if(token){
        return <>{children}</>
    }else{
        return<Navigate to={'/login'} replace/>
    }
}
