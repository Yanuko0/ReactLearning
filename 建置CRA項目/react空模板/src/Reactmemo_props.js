//React.memo props比較機制

// 1. 傳遞一個簡單類型的prop 當prop變化時組件重新渲染

// 2. 當傳遞的數據 是一個引用類型或是複雜類型的 prop  比較的是新值和舊值的引用是否相等 當父組件的函數重新執行時 , 實際上形成是新的數組引用

// 3. 保證引用穩定 - useMemo 組件渲染過程中緩存一個值

import { memo, useMemo, useState } from "react"


const MemoSon = memo(function Son ({list}) {
    console.log('我是子組件, 我重新渲染了')
    return <div>this is son{list}</div>
})


function ReactmemoProps () {
    const [count, setCount] = useState(0)

    // const num = 100

    // const list = [1,2,3]

    const list = useMemo(() => {
        return [1,2,3]
    },[])

    return (
        <div className="App">
            <MemoSon list={list}/>
            <button onClick={() =>setCount(count + 1)}>change Count</button>
        </div>
    )
}

export default ReactmemoProps