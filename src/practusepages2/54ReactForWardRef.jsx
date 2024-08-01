// React.forwardRef

// 想要在父組件透過AppforwardRef去拿子組件的dom元素

import { forwardRef, useRef }  from "react"

// 使用ref暴露DOM節點給父祖件

// forwardRef -場景說明

//---------------------------------------------------------
//|                                                       |
//|  父組件  通過ref獲取到子組件內部的input元素讓齊聚焦       |
//|                                                       |
//|        --------------------------------------         |
//|        |                                    |         |
//|        |      子組件                         |         |
//|        |                                    |         |
//|        |         <input/>                   |         |
//|        |                                    |         |
//|        --------------------------------------         |
//---------------------------------------------------------

// 語法

//子組件
const Input = forwardRef((props, ref) => {
    return <input type="text" ref={ref}/>
})

//父組件
function App () {
    const inputRef = useRef(null)
    return (
        <>
        <Input ref={inputRef}></Input>
        </>
    )
}