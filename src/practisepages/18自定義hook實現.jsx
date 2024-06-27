import React, { useState } from 'react'
// 自定義hook函數
// 概念:自定義Hook是以use打頭的函數,
// 通過自定義Hook函數可以實現邏輯的封裝和復用

//問題:布爾切換的邏輯 當前組件融合在一起 不方便復用

//解決思路:自定義hook

function useToggle(){
    //可復用的邏輯代碼
    const[value, setValue] = useState(true)

    const toggle = () =>{
        setValue(!value)
    }

    //哪些狀態和回調函數需要在其他組件中使用 return
    return{
        value,
        toggle
    }
}

//封裝自定義hook通用思路

//1.聲明以use打頭的函數
//2.在函數體內封裝可復用的邏輯(只要是可復用的邏輯)
//3.組件用到的狀態或回調return出去(以對象或者數組)
//4.在哪個組件中要用到這個邏輯,就執行這個函數,解構出狀態和回調進行使用

function HustomizeHook() {

    // const[value, setValue] = useState(true)

    // const toggle = () =>{
    //     setValue(!value)
    // }
    const {value,toggle} = useToggle()

  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default HustomizeHook
