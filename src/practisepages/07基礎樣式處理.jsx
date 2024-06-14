import React from 'react'
import "../lib/css/practisestyle1.css"

const style ={
    color:'red',fontSize:"25px"
}

export default function Practisestyle1() {
    
  return (
    <div>
    {/* 不推薦行內樣式 */}
    {/* 這兩個是一樣的行內 */}
    {/* <p style={{color:'red',fontSize:"25px"}}>123</p> */}
      <p style={style}>123</p>

    {/* 更推薦通過class類名樣式 */}
      <p className='practisestyle1'>456</p>
    </div>
  )
}
