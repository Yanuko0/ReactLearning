import React, { useState } from 'react'

// 使用規則
// 1.只能在組件中或者其他自定義hook函數中調用
// 2.只能在組件的頂層調用,不能嵌套在if for 其他函數中

// 1.組件外使用
// const [value, setValue] = useState('') 在這邊調用會報錯

function Hookrule() {
    if(Math.random() > 0.5){
        // 2. if for 組件內部函數
        // const [value, setValue] = useState('')  
        // 寫在這邊也會報錯
    }

  return (
    <div>
      <ul>
        <li>使用規則</li>
        <li>1.只能在組件中或者其他自定義hook函數中調用</li>
        <li>2.只能在組件的頂層調用,不能嵌套在if for 其他函數中</li>
      </ul>
    </div>
  )
}

export default Hookrule