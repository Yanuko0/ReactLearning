import React, { useRef } from 'react'

export default function ReactGetDomByUseRef() {
    // 在React中獲取/操作Dom需要使用useRef鉤子函數
    const inputRef = useRef(null)
    console.log(inputRef)
    // inputRef.current 獲取Dom對象
    console.log(inputRef.current)
    
    // 1.useRef生成ref對象綁定到dom標籤
    // <input type="text" ref={inputRef}
    // 2.dom可用時,ref.current獲取dom
    //渲染完畢後dom生成後才可用
    
    const showDom = () => {
        console.log(inputRef.current)
        console.log(inputRef.current.value)
    }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>獲取dom</button>
    </div>
  )
}
