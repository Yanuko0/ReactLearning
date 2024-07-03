import React from 'react'
import { Link } from 'react-router-dom'

// 聲明式導航
// 指模板中通過Link組件描述出要跳轉到哪裡去
// 比如左側菜單通常使用這種方式進行
// <Link to="/articel">文章</Link> 
// 語法說明:通過給組件的to屬性指定要跳轉道路由path,組件會被渲染為瀏覽器支持的a連結,如果需要傳參直接通過字符串拼接的方式接參數即可

//常見菜單跳轉

//編程式導航
// 通過useNavigate鉤子得到導航方法,然後通過調用方式以命令式的形式進行路由跳轉
// 比如想在登錄請求完畢後跳轉就可以選這種方式更加靈活
// 語法說明:通過調用navigate方法傳入地址path實現跳轉

// 常見登錄以後要跳轉

export default function RouterLink() {
  return (
    <div>
      
    </div>
  )
}
