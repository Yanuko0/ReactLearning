// useInperativeHandle
// 通過ref暴露子組件中的方法

import { forwardRef, useImperativeHandle, useRef } from "react";

// 場景說明:

//---------------------------------------------------------
//|                                                       |
//|  父組件  通過ref調用子組件內部的FOCUS方法實現聚焦        |
//|                                                       |
//|        --------------------------------------         |
//|        |                                    |         |
//|        |      子組件                         |         |
//|        |          focus                     |         |
//|        |         <input/>                   |         |
//|        |                                    |         |
//|        --------------------------------------         |
//---------------------------------------------------------

//子組件
const Input = forwardRef((props, ref) => {
    const inputRef = useRef(null)
    //實現聚焦邏輯函數
    const focusHandler = () => {
        inputRef.current.focus()
    }
    //暴露函數給父祖件調用
    useImperativeHandle(ref, () => {
        return{
            focusHandler
        }
    })
    return <input type="text" ref={inputRef}/>
})

