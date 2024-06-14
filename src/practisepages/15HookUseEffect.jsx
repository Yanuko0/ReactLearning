import React, { useEffect, useState } from 'react'
import axios from "axios";

// 整個過程沒有用戶事件只要渲染完畢就會執行
// 需求 在組件渲染完畢後,立刻從服務端獲取頻道列表數據並顯示到頁面中

const URL = `http://geek.itheima.net/v1_0/channels`

function HookUseEffect() {
  //創建一個狀態
  const [list,setList] = useState([])
  useEffect(()=>{
    //額外操作 獲取頻道列表
    const getList = async() =>{
      try{
        
        const result = await axios({
          url:URL
        })
        console.log(result.data.data.channels)
        setList(result.data.data.channels)

      }catch(error){
        console.log(error)
      }
    }
    getList()
  },[])
  return (
    <div>
      This is app
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default HookUseEffect
