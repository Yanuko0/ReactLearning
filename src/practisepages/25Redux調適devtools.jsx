import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChannlList } from "../store/modules/channelStore"

// 在瀏覽器安裝redux DevTools插件

export default function ReduxDevtools() {
    const { channelList } = useSelector(state => state.channel)
    const dispatch = useDispatch()
    //使用useEffect觸發異步請求執行
    useEffect(()=>{
        dispatch(fetchChannlList())
    },[dispatch])
  return (
    <div>
      <ul>
        {channelList.map(item => 
        <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}
