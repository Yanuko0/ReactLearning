//封裝和文章相關的接口函數

import { request } from "@/utils";

// 1.獲取頻道列表

export function getChannelAPI (){
    return request({
        url:'/channels',
        method:'GET',
    })
}
