import React, { useEffect, useState } from 'react'

// 說明:清除副作用的函數最常見的執行時機是在組件卸載時自動執行
  // useEffect(()=>{
    //     //實現副作用操作邏輯
    //     return () =>{
    //         //清除副作用邏輯

    //     }
    // },[])

    // 副作用操作 =>由渲染本身引起的對接組件外部的操作

function Son(){
    // 1.渲染時開啟一個定時器
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('定時器執行中...')
        },1000)

        return ()=>{
            // 清除副作用
            clearInterval(timer)
        }
    },[])
    return(
    <div>
        <p>this is son</p>
    </div>
    )
}

function HookUseEffectClearSideEffects() {
    // 需求:在組件渲染時開啟一個定時器,卸載時清除這個定時器
     const [show, setShow] = useState(true)

     const handletoggleBtn = () =>{
        setShow(prev=>!prev)
     } 

  return (
    <div>
      {show && <Son/>}
      {/* <button onClick={()=> setShow(false)}>卸載Son組件</button> */}
      <button onClick={handletoggleBtn}>卸載Son組件</button>
    </div>
  )
}

export default HookUseEffectClearSideEffects