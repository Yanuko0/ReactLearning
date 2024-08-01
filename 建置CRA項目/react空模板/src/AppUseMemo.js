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

export default AppUseMemo