//接口文檔
// https://apifox.com/apidoc/shared-fa9274ac-362e-4905-806b-6135df6aa90e/api-23673257


// 3.導入實例
import { http } from '@/utils'

// //1. 定義泛型(因為很多接口都是一樣的)
// type ResType<T> = {
//     message:string
//     data:T
// }
// 因為1泛型是通用的創建一個shared.ts 並將牠放入導出
import type { ResType } from './shared'


//2.定義具體的接口類型(先定義裡面再定義外面)

//▼ data object{1} 響應數據
    // ▼ channels array[object{2}] 響應頻道數組
            // id   integer 頻道id
            // name string 頻道名字
    //  message string 響應消息

export type ChannelItem = {
    id: number
    name: string
}

type ChannelRes = {
    channels: ChannelItem[]
}


// 4.請求頻道列表(組合1跟2)

export function fetchChannelAPI () {
    return http.request<ResType<ChannelRes>>({
        url: '/channels'
    })
}

//請求文章列表

type ListItem = {
    art_id: string
    title: string
    aut_id: string
    comm_count: number
    pubdate: string
    aut_name: string
    is_top: number
    cover: {
        type: number
        image: string[]
    }
}

export type ListRes = {
    results: ListItem[]
    pre_timestamp: string
}

//跟上面比多了一個要傳的參數
type ReqParams = {
    channel_id: string,
    timestamp: string
}

export function fetchListAPI (params: ReqParams) {
    return http.request<ResType<ListRes>>({
        url: '/articles',
        params
    })
}

