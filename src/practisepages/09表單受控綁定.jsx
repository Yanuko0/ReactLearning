import React, { useState } from 'react'

// 表單受控綁定
export default function FormControlledBinding() {
// 1.聲明一個react狀態-useState
// 2.核心綁定流程
// 1.通過value屬性綁定react狀態
// 2.綁定onChange事件 通過事件參數拿到輸入框最新的值 反向修改到react身上去
const[value,setVale] = useState('')

const handleValueChange = (e) =>{
    setVale(e.target.value)
}
console.log(value)
  return (
    <div>
      <input type="text" name="" id=""
      value={value}
      onChange={handleValueChange} 
      />
    </div>
  )
}
