
// useReducer

import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";


// 作用類似於: useState的作用,用來管理相對複雜的狀態數據

//        =>自增
// count  =>自減
//        =>重置

// 基礎用法
// 1.定義一個reducer函數(根據不同的action返回不同的新狀態)

// function reducer(state, action){
//     switch(action.type) {
//         case 'INC':
//             return state +1
//         case 'DEC':
//             return state -1
//         default:
//             return state 
//     }
// }

// 2.在組件中調用useReducer, 並傳入reducer函數和狀態的初始值
// const [state, dispatch] = useReducer(reducer, 0)

// 3.事件發生時, 通過dispatch函數分派一個action對象(通知reducer要返回哪個新狀態並渲染UI)

// dispatch({ type: 'INC' })

// 1.定義reducer函數 根據不同的action返回不同的狀態

function reducer (state, action) {
    switch (action.type) {
      case 'INC':
        return state + 1
      case 'DEC':
        return state - 1
      default:
        return state
    }
  }
  
  
  // 2.組件中調用useReducer(reducer, 0) => [state, dispatch]
  
  // 3.調用dispatch({type:'INC'}) => 通知reducer產生一個新的狀態 使用這個新狀態更新UI
  
  
  function App(){
    const [state, dispatch] = useReducer(reducer, 0)
    return (
    <div>
      <p>數值:
      <button onClick={()=> dispatch({ type: 'INC'})}>+</button>
      {state}
      <button onClick={()=> dispatch({ type: 'DEC'})}>-</button>
      </p>
      {/* <Button type='primary'>test</Button> */}
      </div>
  )
  }

//   小結
                                                       // reducer
//  ˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍ                         ˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍ
//  |   dispatch({      |   觸發reducer函數        |    state = 0        |
//  |     type:'INC'    |  ------------------>    |                     |  
//  |     })            |                         |   "INC" -> state+1  |
//  ﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉                          |                     |
//                                                |   "DES" -> state-1  |
//                                                |                     |
//                                                |          |          |
//                                                |          |          |
//                                                |          |          |
//                                                |         \|/         |
//  ˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍ                         |                     |
//  |                   |    使用新狀態渲染UI      |                     |
//  |         UI(1)     |  <------------------    |     state +1        |
//  |                   |                         |                     |
//   ﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉                          ﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉
                                           //根據不同action type返回不同狀態