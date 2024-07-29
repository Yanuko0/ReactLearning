//用戶相關的所有請求
import { request } from "@/utils";

// 1.登錄請求

export function loginAPI (formData){
    return request({
        url:'/authorizations',
        method:'POST',
        data:formData
    })
}

// 2.獲取用戶信息

export function getProfileAPI (){
    return request({
        url:'/user/profile',
        method:'GET'
    })
}
