import { Image, List, InfiniteScroll } from "antd-mobile";
//mock數據
// import { users } from './user'
import { useEffect, useState } from "react";
import { fetchListAPI, ListRes } from "@/apis/list";
import { useNavigate } from "react-router-dom";



type Props = {
    channelId: string
}

const HomeList = (props: Props) => {

    const { channelId } = props

    //獲取列表數據
    const [listRes, setListRes] = useState<ListRes>({
        results:[],
        pre_timestamp: ''+ new Date().getTime(),
    })

    useEffect(()=>{
        const getList = async() => {
            try {
                const res = await fetchListAPI({
                    channel_id: channelId,
                    timestamp: ''+ new Date().getTime(),
                })
                setListRes({
                    results: res.data.data.results,
                    pre_timestamp: res.data.data.pre_timestamp,
                })
            } catch (error) {
                throw new Error('fetch list error')
            }
        }
        getList()
    },[channelId])

    //開關 標記當前是否有新數據
    //上拉加載觸發的必要條件: 1.hasMore = true  2.小於threshold
    const [hasMore, setHasMore] = useState(true)
    //加載下一頁的函數
    const loadMore = async() => {
        //編寫加載下一頁的核心邏輯
        console.log('上拉加載觸發了')
        // setHasMore(false)
        try {
            const res = await fetchListAPI({
                channel_id: channelId,
                timestamp: listRes.pre_timestamp,
            })
            //拼接新數據 + 存取下一次請求的時間戳
            setListRes({
                results: [...listRes.results, ...res.data.data.results],
                pre_timestamp: res.data.data.pre_timestamp,
            })
            //停止監聽
            if(res.data.data.results.length === 0){
                setHasMore(false)
            }
        } catch (error) {
            throw new Error('fetch list error')
        }
    }

    const navigate = useNavigate()

    const goToDetail = (id: string) => {
        //路由跳轉
        navigate(`/detail?id=${id}`)
    }

    return (
        <>
            <List>
                {listRes.results.map((item)=>(
                    <List.Item
                    onClick={() => goToDetail(item.art_id)}
                    key={item.art_id}
                    prefix={
                        <Image
                            src={item.cover.image?.[0]}
                            style={{ borderRadius: 20 }}
                            fit="cover"
                            width={40}
                            height={40}
                        />
                    }
                    description={item.pubdate}>
                    {item.title}
                    </List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10}/>
        </>
    )
}

export default HomeList