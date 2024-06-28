import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToNum } from '../store/modules/counterStore'

// 按鈕      按鈕          按鈕
//   0      add to 10    add to 20

// 組件中有兩個按鈕add to 10 和 add to 20
// 直接把count修改到對應的數字
// 因為目標count值是在組件中傳遞過去的,需要在提交action的時候傳遞參數

// 提交action傳參實現需求
// 在reducers的同步修改方法中 添加action對象參數,
// 在調用actionCreater的時候傳遞參數,參數會被傳遞到action對象payload屬性上

export default function ReduxAction() {
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()
  return (
    <div>
      {count}
      <button onClick={()=>dispatch(addToNum(10))}>
        add to 10
      </button>
      <button onClick={()=>dispatch(addToNum(20))}>
        add to 20
      </button>
    </div>
  )
}
