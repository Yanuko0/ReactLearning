/* eslint-disable no-const-assign */
import React, { useState } from 'react'

export default function HookUseState() {
  //用useState實現計數器

  //1.調用useState添加狀態變量
  //count狀態變量
  //setCount修改狀態變量的方法
  const[count,setCount] = useState(0);

  //2.點擊事件回調
  const handleClick = () =>{
    // 作用:1.用傳入的新值修改count
    //2.重新使用新的count去渲染UI
    // setCount(count+1)
    setCount(pre=> pre+1)
  }

  //React中狀態是只讀的,我們應該始終替換它而不是修改它,直接修改不能引發視圖更新
  // const handleClick1 = () => {
  //   //直接修改不會引發視圖更新
  //   count++
  //   console.log(count)
  // }

  // const handleClick2 =() => {
  //   //作用:
  //   //1.傳入新值修改count
  //   //2.重新使用新的count渲染UI
  //   setCount(count + 1)
  // }



  // 修改對象狀態

  //直接修改原對象不會引發視圖更新
  //錯誤寫法:直接修改 form.name = 'john'
  // const [form, setForm] = useState({name:`jack`,})

  // const handleChangeName = ()=>{
  //   form.name = 'john'
  // }
  // console.log(form)
 

  // 應該要這麼做調用set傳入新對象來修改
  // 正確寫法是setFrom傳入一個全新的對象
  const [form, setForm] = useState({name:'jack'})

  const handleChangeName = () =>{
    setForm({
      ...form,
      name:`john`,
    })
  }

  return (
    <div>
      <p>count的值是:{count}</p>
      <button onClick={handleClick}>{count}</button><br/>
      <p>form的值是:{form.name}</p>
      <button onClick={handleChangeName}>修改Form</button>
    </div>
  )
}
