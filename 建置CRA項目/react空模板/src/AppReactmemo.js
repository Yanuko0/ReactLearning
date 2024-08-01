//React.memo

import { memo ,useState } from "react"

// 1. 驗證默認的渲染機制 子跟著父一起渲染

// 2. memo進行緩存  只有props發生變化時才會重新渲染 (沒有考慮context的情況)

const MemoSon = memo(function Son () {
    console.log('我是子組件, 我重新渲染了')
    return <div>this is son</div>
})

// function Son () {
//     console.log('我是子組件, 我重新渲染了')
//     return <div>this is son</div>
// }

function Reactmemo () {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <button onClick={()=>setCount(count + 1)}>+{count}</button>
            {/* <Son /> */}
            <MemoSon/>
        </div>
    )
}

export default Reactmemo