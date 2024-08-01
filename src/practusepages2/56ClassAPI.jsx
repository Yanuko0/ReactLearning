// Class API 編寫類組件
// 通過JS中的類來組織組件的代碼

import { Component } from "react";

// 1.通過類屬性state定義狀態數據
// 2.通過setState方法修改狀態數據
// 3.通過render來寫UI模板(jsx語法一致)

// class Counter extends Component {
//     //定義狀態變量
//     state = {
//         count: 0
//     }
//     //事件回饋
//     clickHandler = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }


//     //UI模板(JSX)
//     render() {
//         return <button onClick={this.clickHandler}>{this.state.count}</button>
//     }
// }


//Class API

class Counter extends Component {
    //編寫組件的邏輯代碼
    // 1.狀態變量 2.事件回調 3.UI(JSX)
    // 1.定義狀態變量
    state = {
        count: 0
    }

    //2.定義事件回調修改狀態數據
    setCount = () => {
        //修改狀態數據
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return <button onClick={this.setCount}>{this.state.count}</button>
    }
}

function App () {
    return (
        <>
        <Counter/>
        </>
    )
}

export default App