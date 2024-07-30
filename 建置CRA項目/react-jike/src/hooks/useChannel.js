//封裝獲取頻道列表的邏輯

import { getChannelAPI } from "@/apis/article"
import { useEffect, useState } from "react"

// 1.use打頭的函數
// 2.在內部封裝要複用的業務邏輯
// 最後把狀態return出去
function useChannel(){
    // 1.獲取頻道列表所有的邏輯
    //獲取頻道列表
    const [channelList, setChannelList] = useState([])

    useEffect(() => {
        //1.封裝函數 在函數體內調用接口
        const getChannelList = async () => {
            const res = await getChannelAPI()
            setChannelList(res.data.channels)
        }
        //2.調用函數
        getChannelList()
    }, [])
    // 2.把組件中要用到的數據return出去
    return {
        channelList
    }
}

export { useChannel }

// 最後引入得到返回值
// const { channelList } = useChannel() 把組件要用的數據狀態解構出來