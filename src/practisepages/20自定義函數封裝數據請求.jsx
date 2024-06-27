import axios from 'axios'
import React, { useEffect, useState } from 'react'

// 優化需求:自定義hook函數封裝數據需求

// 一班思路:
// 1.編寫一個use打頭的函數
// 2.函數內部編寫封裝的邏輯
// 3.return出去組件中用到的狀態和方法
// 4.組件中調用函數解構復值使用

const App = () =>{
//獲取接口數具渲染
// const [commentList, setCommentList] = useState([])

//   useEffect(()=>{
//     //請求數據
//     async function getList(){
//       //axios請求
//       const res = await axios.get(`http://localhost:3004/list`)
//       setCommentList(res.data)
//     }
//     getList()
//   },[])
const { commentList, setCommentList} = useGetList()

}

// 封裝請求數據的hook

function useGetList(){
    const [commentList, setCommentList] = useState([])

  useEffect(()=>{
    //請求數據
    async function getList(){
      //axios請求
      const res = await axios.get(`http://localhost:3004/list`)
      setCommentList(res.data)
    }
    getList()
  },[])
  return{
    commentList,
    setCommentList
  }
}


export default function HookuseXxxAxios() {
  return (
    <div>
      
    </div>
  )
}
