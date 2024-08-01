import { forwardRef, useRef } from "react"

// 想要在父組件透過AppforwardRef去拿子組件的dom元素

//子組件
// function Son (){
//     return(
//     <input type="text"/>
//     )
// }

const Son = forwardRef((props, ref) => {
    return <input type="text" ref={ref}/>
})


//父組件
function AppforwardRef () {
    const sonRef = useRef(null)
    const showRef = () =>{
        console.log(sonRef)
        sonRef.current.focus()
    }
    return (
        <>
        <Son ref={sonRef}/>
        <button onClick={showRef}>focus</button>
        </>
    )
}

export default AppforwardRef