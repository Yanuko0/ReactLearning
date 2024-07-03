import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'


// searchParams傳參

// import { Link, useNavigate } from "react-router-dom"

// const Login = () =>{
//     const navigate = useNavigate()
//     return (
//     <div>
//         我是登錄頁面
//         {/* 聲明式寫法 */}
//         <Link to='/article'>跳轉到文章頁</Link>
//         {/* 命令式的寫法 */}
//         <button onClick={()=>navigate('/article')}>點我跳轉文章</button>
//     </div>
//     )
// }

// 傳參通過?拼接  用&連結多個參數
// navigate('/article?id=1001&name=jack')

// 傳過去之後用鉤子函數
// const [params] = useSearchParams()
// let id = params.get('id')

// 第二種傳參 params傳參
// navigate('/article/1001')

// {
//     path:'/article/:id/:name',
//     element:<Article/>
// },

// const params = useParams()
// let id = params.id

export default function RouterLinkUpValue() {
  return (
    <div>
      <p>兩種傳地方是</p>
      <p>1.searchParams傳參</p>
      <p>navigate('/article?id=1001&name=jack')</p>
      <p>傳參通過?拼接  用&連結多個參數</p>
      <p>傳遞過去之後用鉤子函數</p>
      <p>const [params] = useSearchParams()</p>
      <p>let id = params.get('id')</p>
      <br />
      <p>2.params傳參</p>
      <p>navigate('/article/1001')</p>
      <p>之後去router路由設定  path:'/article/:id/:name'</p>
      <p>傳遞過去候用const params = useParams()</p>
      <p>let id = params.id來取得id</p>
    </div>
  )
}
