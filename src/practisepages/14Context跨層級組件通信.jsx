
import React, { createContext, useContext } from 'react'

// |------------------------------------------|
// |-- App                                  --|
// |--       |--------------------------|   --|
// |--       |-  A                     -|   --|
// |--       |-    |----------------|  -|   --|
// |--       |-    | B              |  -|   --|
// |--       |-    |----------------|  -|   --|
// |--       |--------------------------|   --|
// |------------------------------------------|

// 由app跨層傳到B
// 實現步驟
// 1.使用creactContext方法創建一個上下文對象Ctx

const MsgContext = createContext()

// 2.在頂層組件(APP)中通過 Ctx.Provider 組件提供數據

// <MsgContext.Provider value={msg}>
//     this APP
//     <A/>
// </MsgContext.Provider>

// 3.在底層數件(B)中通過 useContext 鉤子函數獲取消費數據

function A () {
    return(
        <div>
            this is A component
            <B/>
        </div>
    )
}

function B () {

    const msg = useContext(MsgContext)
    return(
        <div>
            this is B component,{msg}
        </div>
    )
}

function UseConText() {

    // const MsgContext = createContext()
    const msg = "這是app訊息"
  return (
    <div>
    <MsgContext.Provider value={msg}>
    this APP
    <A/>
    </MsgContext.Provider>
    </div>
  )
}

export default UseConText
