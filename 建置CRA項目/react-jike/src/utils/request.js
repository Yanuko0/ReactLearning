// axios的封裝處理
import axios from "axios";
//1.根域名配置
//2.超時時間
//3.請求攔截器 / 響應攔截器

const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout: 5000  //超時時間5秒鐘
})

//添加請求攔截器
//請求發送之前 做攔截 插入自定義的配置[參數的處理]
request.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

//添加響應攔截器
//在響應返回到客戶端之前 做攔截 重點處理返回的數據
request.interceptors.response.use((response)=>{
    //2xx範圍內的狀態碼都會觸發該函數
    //對響應數據做點什麼
    return response.data
},(error)=>{
    //2xx範圍內的狀態碼都會觸發該函數
    //對響應錯誤做點什麼
    return Promise.reject(error)
})


export { request }