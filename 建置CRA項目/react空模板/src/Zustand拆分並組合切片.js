import { useEffect } from "react";
import { create } from "zustand"; 
// import { useStore } from "@/store/index"
const URL = 'http://geek.itheima.net/v1_0/channels'


//store文件夾
//counterStore
//channenlStore
//index.js



// //1.拆分子模塊 在組合起來

const createCounterStore = (set) => {
    return {
        //狀態數據
        count: 0,
        //修改狀態數據的方法
        inc:() => {
            set((state) => ({count: state.count + 1 }))
            // set({ count: 100 })
        },
    }
}

const createChannelStore = (set) => {
    return {
        channelList: [],
        fetchGetList: async () => {
            const res = await fetch(URL)
            const jsonRes = await res.json()
            console.log(jsonRes)
            set({
                channelList: jsonRes.data.channels
            })
        }

    }
}

const useStore = create((...a) => {
    return {
        ...createCounterStore(...a),
        ...createChannelStore(...a)
    }
})

//2.組件使用


function Zustand拆分並組合切片 () {
    const { count, inc , fetchGetList, channelList} = useStore()

    useEffect(()=>{
        fetchGetList()
    },[fetchGetList])
    
    return (
        <>
            <button onClick={inc}>{count}</button>
            <ul>
                {
                    channelList.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </>
    )
}

export default Zustand拆分並組合切片