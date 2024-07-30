//封裝和文章相關的接口函數

import { request } from "@/utils";

// 1.獲取頻道列表

export function getChannelAPI (){
    return request({
        url:'/channels',
        method:'GET',
    })
}


// 2.提交文章表單

export function createArticleAPI (data) {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data
    })
}

// 3.獲取文章列表

export function getArticleListAPI (parames) {
    return request({
        url: '/mp/articles',
        method: 'GET',
        parames
    })
}