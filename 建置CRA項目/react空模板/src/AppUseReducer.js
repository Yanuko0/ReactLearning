import { type } from "@testing-library/user-event/dist/type";
import { Button } from "antd";
import { useReducer } from "react";

//useReducer

// 1.定義reducer函數 根據不同的action返回不同的狀態

function reducer (state, action) {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'SET':
      return action.payload
    default:
      return state
  }
}


// 2.組件中調用useReducer(reducer, 0) => [state, dispatch]

// 3.調用dispatch({type:'INC'}) => 通知reducer產生一個新的狀態 使用這個新狀態更新UI


function AppUseReducer(){
  const [state, dispatch] = useReducer(reducer, 0)
  return (
  <div>
    <p>
    <button onClick={()=> dispatch({type: 'INC'})}>+</button>
    {state}
    <button onClick={()=> dispatch({type: 'DEC'})}>-</button>
    </p>
    <button onClick={()=> dispatch({type: 'SET',payload: 100 })}>update</button>
    {/* <Button type='primary'>test</Button> */}
    </div>
)
}

export default AppUseReducer