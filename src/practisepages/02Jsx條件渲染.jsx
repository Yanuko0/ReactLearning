
import React, { useState } from 'react'

export default function PractiseJsx2() {
    // 邏輯與&&
    // 如果只想控制單一的邏輯運算
    // {flag && <span>this is span</span>}
    // 如果flag為trun顯示 如果為false 則不顯示

    // 三元表達式
    // {loading ? <span>loading...</span>:<span>this is span</span>}
    // 如果控制多個
    // 如果為true顯示<span>loading...</span>
    // 如果為false顯示<span>this is span</span>

    const [isLogin,setIsLogin] = useState(false)
    // const isLogin = false;
    
    const handleToggle = () =>{
        setIsLogin(prevIsLogin => !prevIsLogin)
    }
    

  return (
    <div>
    <p>邏輯與&& 如果為true顯示,false則不顯示</p>
    <p>三元表達式 如果為true顯示jack,false則顯示loading</p>
    <p>當前為:<button onClick={handleToggle}>{`${isLogin}`}</button></p>
    {/* 邏輯與&& 只需要控制一個元素*/}
      {isLogin && <span>this is span</span>}
      <br/>
    {/* 三元表達式 控制兩個*/}
        {isLogin?<span>jack</span>:<span>loading</span>}
    </div>
  )
}
