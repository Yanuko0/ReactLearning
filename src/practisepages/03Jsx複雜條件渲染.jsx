import React from 'react'

export default function PractiseJsx3() {
    //定義文章類型
    const articleType = 3 // 0 1 3
    
    //定義核心函數(根據文章類型返回不同的Jsx模板)
const getArticeTem = () =>{
    if(articleType ===0){
        return (
        <div>我是無圖文章</div>
    )
    }else if(articleType === 1){
        return (
            <div>我是單圖模式</div>
        )
    }else{
        return (
            <div>我是三圖模式</div>
        )
    }
}
  return (
    <div>
      {getArticeTem()}
    </div>
  )
}
