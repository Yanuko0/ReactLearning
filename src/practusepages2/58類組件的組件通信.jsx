// 類組件的組件通信

// 概念: 類組件和hooks編寫的組件在組件通信的思想完全一致

// 1.父傳子: 通過prop 綁定數據
// 2.子傳父: 通過prop綁定父組件中的函數
// 3.兄弟通信: 狀態提升, 通過父組件做橋接

// Class API 父子通信

import { Component } from "react";
// 1.父傳子 直接在子組件標籤身上綁定父組件中的數據即可
// 2.子傳父 在子組件標籤身上綁定父組件中的函數, 在子組件鐘調用這個函數傳遞參數

//總結
// 1.思想上保持一致
// 2.類組件依賴於this

//子組件
class Son extends Component {
    render () {
        //使用this.props.msg
        return <>
        <div>我是子組件{this.props.msg}</div>
        <button onClick={()=>this.props.onGetSonMsg('我是son組件中的數據')}>sendMsgToParent</button>
        </>
    }
}

// 父組件
class Parent extends Component {
    state = {
        msg:'this is parent msg'
    }

    getSonMsg = (sonMsg) => {
        console.log(sonMsg)
    }

    render () {
        return <div>我是父祖件<Son msg={this.state.msg} onGetSonMsg={this.getSonMsg}/></div>
    }
}

function App () {
    return(
        <>
        <Parent />
        </>
    )
}

export default App