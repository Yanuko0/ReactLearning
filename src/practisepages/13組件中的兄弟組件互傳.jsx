import React, { useState } from 'react'

//使用狀態提升實現兄弟組件之間的通信
// 實現思路:借助狀態提升機制,通過父組件進行兄弟組件之間的數據傳遞
// 透過共同的父組件
// 先子傳父 再父傳子

function ComponentPassingSiblingComponents() {
    const[bro1Cm,setBro1Cm] = useState('')
    const GetBro1Cm = (cm) =>{
        console.log(cm)
        setBro1Cm(cm)
    }
    return (
        <div>
            
            <Bro1 BroPassing1={GetBro1Cm}/>
            <Bro2 BroPassing2={bro1Cm}/>
        </div>
    )
}

function Bro1({BroPassing1}) {
    const Bro1Data = "兄弟一20公分"

    return (
        <div>
            <p>兄弟一</p>
            <button onClick={()=>BroPassing1(Bro1Data)}>bro1的數據</button>
        </div>
    )
}

function Bro2(props) {
    console.log(props)

    return (
        <div>
            <p>兄弟二說:</p>
            {props.BroPassing2}
        </div>
    )
}

export default ComponentPassingSiblingComponents
