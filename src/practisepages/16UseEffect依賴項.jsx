import React, { useEffect, useState } from 'react'

//      依賴項                 副作用執行時機
//    沒有依賴項         組件初始渲染+組件更新時執行
//    空數組依賴項            只有初始渲染執行一次
//   添加特定依賴項     組件初始渲染+特定依賴項變化時執行

export default function HookUseEffectDependencies() {
    // 1. 沒有依賴項   初始+組件更新(不管是誰只要有讓組件重新渲染就執行)
    const [count, setCount] = useState(0)
    // useEffect(()=>{
    //     console.log('副作用函數執行了')
    // })

    // 2.傳入空數組依賴  初始執行一次
    // useEffect(()=>{
    //     console.log('副作用函數執行了')
    // },[])

    // 3.添加特定依賴項   初始 + 依賴項變化時執行(只有依賴項改變時執行)
     useEffect(()=>{
        console.log('副作用函數執行了')
    },[count])

  return (
    <div>
        <p>現在數字是:{count}</p>
      <button onClick={()=>setCount(count+1)}>+{count}</button>
    </div>
  )
}
