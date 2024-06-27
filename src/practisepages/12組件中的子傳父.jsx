import React, { useState } from 'react'

//核心:在子組件中調用父組件的函數並傳遞實參

function Son ({onGetSonMsg}) {
    //Son組件中的數據
    const sonMsg = 'this is son msg'
    return(
        <div>
            this is Son
            <button onClick={()=>onGetSonMsg(sonMsg)}>sendMsg</button>
        </div>
    )
}



function ComponentPassingFromChildToParent() {
    const [msg,setMsg] = useState('')
    const getMsg = (msg) => {
        console.log(msg)
        setMsg(msg)
    }
    console.log(msg)
  return (
    <div>
      this is App, {msg}
      <Son onGetSonMsg={getMsg}/>
    </div>
  )
}

export default ComponentPassingFromChildToParent
