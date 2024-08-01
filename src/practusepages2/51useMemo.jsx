// useMemo

// 緩存:消耗非常大的計算

// 作用:在組件每次重新渲染的時候緩存計算結果

// 看個需求:

        // 組件Component
//                  fn
//  count1 ----> 費波那契數列求和
//                ↗
//               /
//      count2  / count2變化也會執行fn

// 基礎語法
// useMemo(()=> {
//     //根據count1返回計算結果
// },[count1])

// useMemo用來做緩存的  緩存計算之後的結果



import { useMemo, useState } from "react";

//計算斐波那契數列之和
function fib (n) {
    console.log('計算函數執行了')
        if(n < 3)
            return 1
        return fib(n - 2) + fib(n - 1)
}

function AppUseMemo () {
    const [count1, setCount1] = useState(0)

    const result = useMemo(()=>{
        //返回計算得到的結果
        return fib(count1)
    },[count1])

    // const result = fib(count1)

    const [count2, setCount2] = useState(0)
    console.log('組件重新渲染了')
    return (
        <div className="App">
            <p>
            <button onClick={() => setCount1(count1 + 1)}>change count1: {count1}</button>
            <button onClick={() => setCount2(count2 + 1)}>change count2: {count2}</button>
            </p>
            {result}

        </div>
    )
}
