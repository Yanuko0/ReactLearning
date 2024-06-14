import React from 'react'


function Button(){
    //業務組件邏輯

    const handleClick = () =>{
        console.log(1)
    }
  return (
    <button onClick={()=>{handleClick()}}>click me!</button>
  )
}

const Button1 = () =>{

    const handleClick = () =>{
        console.log(2)
    }
    return (
        <button onClick={handleClick}>click me!</button>
      )
}

export default function ReactComponents1() {
    // 定義組件首字母大寫

    
  return (
    <>
    {/* 自閉合 */}
     <Button/>
     {/* 成對標籤 */}
     <Button></Button>

     <Button1/>
    </>
  )
}
