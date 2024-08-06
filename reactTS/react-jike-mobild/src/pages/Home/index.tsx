// import { useEffect, useState } from 'react'
import './style.css'
import { Tabs } from 'antd-mobile'
// import { fetchChannelAPI, type ChannelItem } from '@/apis/list'

import { useTabs } from './useTabs'
import HomeList from './HomeList'

const Home = () => {

    // const [channels, setChannels] = useState<ChannelItem[]>([])

    // useEffect(() => {
    //     const getChannels = async() => {
    //         try {
    //             const res = await fetchChannelAPI()
    //             setChannels(res.data.data.channels)
    //         } catch (error) {
    //             throw new Error('fetch channel error')
    //         }
    //     }
    //     getChannels()
    // },[])

    const { channels } = useTabs()

    return <div>
        <div className='tabContainer'>
            {/* tab區域 */}
            <Tabs defaultActiveKey={'0'}>
                {channels.map((item) => (
                    <Tabs.Tab title={item.name} key={item.id}>
                    {/* list組件 */}
                    {/* 別忘了加上類名 嚴格控制滾動盒子 */}
                    <div className='listContainer'>
                        <HomeList channelId={'' + item.id}/>
                    </div>
                </Tabs.Tab>
            ))}
            </Tabs>
        </div>
    </div>
}

export default Home