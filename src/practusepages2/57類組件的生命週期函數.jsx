// 類組件的生命週期函數

// 概念: 組件從創建到銷毀的各個階段自動執行的函數 就是生命週期

// Render 階段       |     掛載時       |            更新時                        |        卸載時
// 純淨且不包含副作用 |      ↓           |                              force      |        ↓ 
// 可能會被React暫停, |  constructor    |   New props   setState()    Update()     |       |
// 中止或是重新啟動   |       ↓          |     ↓            ↓              ↓        |       |
//                   | ---------------------------------------------------------- |      |
//                   | |              render                                      |      ↓ 
// ----------------- |  ----------------------------------------------------------| -------------
// Commit階段        |       ↓          |                 ↓                       |      ↓ 
// 可以使用DOM,運行   | -----------------------------------------------------------|       ↓ 
// 副作用,安排更新    | |             React更新DOM和refs                            |      ↓ 
//                   | -----------------------------------------------------------|       ↓ 
//                   |       ↓           |              ↓                         |  conpinentWill
//                   | componentDisMount |     componentDidUpdate                 |     Unmount
//------------------------------------------------------------------------------------------------

// 1.componentDidMount: 組件掛載完壁自動執行 - 異步數據獲取
// 2.componentWillUnmount: 組件卸載時自動執行 - 清理副作用

// Class API 生命週期

import { Component, useState } from "react"

class Son extends Component {
    //生命週期函數
    //組件渲染完畢自動執行一次 發送api請求
    componentDidMount(){
        console.log('組件渲染完畢,請求發送起來')
        //開啟一個定時器
        this.timer = setInterval(() => {
            console.log('定時器運行中')
        }, 1000)
    }

    //組件卸載時自動執行  副作用清理工作 清除定時器 清除事件綁定
    componentWillUnmount(){
        console.log('組件Son被卸載了')
        //清除定時器
        clearInterval(this.timer)
    }

    render (){
        return <div>i am Son</div>
    }
}

function App () {
    const [show, setShow] = useState(true)
    return(
        <>
            {show && <Son/>}
            <button onClick={()=>setShow(false)}></button>
        </>
    )
}

export default App