import { forwardRef, useImperativeHandle, useRef } from "react"


//子組件

const Son = forwardRef((props, ref) => {
    //實現聚焦邏輯
    const inputRef = useRef(null)
    const focusHandler = () => {
        inputRef.current.focus()
    }
    // const log123 = () =>{
    //     console.log(123)
    // }

    //把聚焦方法暴露出去 ref來自於上面參數ref
    useImperativeHandle(ref, ()=>{
        return {
            //暴露的方法 一個對象結構
            focusHandler,
            // log123
        }
    })
    return <input type="text" ref={inputRef}/>
})


//父組件
function AppUseImperativeHandle () {
    const sonRef = useRef(null)
    const focusHandler = () => {
        console.log(sonRef.current)
        sonRef.current.focusHandler()
        // sonRef.current.log123()
    }
    return (
        <>
        <Son ref={sonRef}/>
        <button onClick={focusHandler}>focus</button>
        </>
    )
}

export default AppUseImperativeHandle