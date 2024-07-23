// axios的封裝處理
import axios from "axios";
//1.根域名配置
//2.超時時間
//3.請求攔截器 / 響應攔截器

const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout: 5000  //超時時間5秒鐘
})

export {request}