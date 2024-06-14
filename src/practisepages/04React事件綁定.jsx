import React from 'react'

export default function Practisebutton1() {
    //事件綁定
    const handleClick = () => {
        console.log('按鈕被點擊了')
    }

    //拿到事件對象e
    const clickHandler = (e) => {
        console.log('按鈕被點擊了',e)
    }

    //傳遞自定義參數
    const clickHandler1 = (name) => {
        console.log('按鈕被點擊了',name)
    }

    //同時傳遞自定義對象以及事件參數e
    const clickHandler2 = (name,e) => {
        console.log('按鈕被點擊了',name,e)
    }


  return (
    <div>
      <button onClick={handleClick}>點我事件綁定</button><br/>
      <button onClick={clickHandler}>點我拿事件對象e</button><br/>

      {/* 一定事箭頭函數的寫法 */}
      <button onClick={()=>{clickHandler1('jack')}}>傳遞字定義參數</button><br/>

      {/* 同時拿到自定義對象以及事件參數e */}
      {/* 注意(name,e)順序跟('jack',e)順序一致 */}
      <button onClick={(e)=>{clickHandler2('jack',e)}}>定義參數跟e</button><br/>
    </div>
  )
}
