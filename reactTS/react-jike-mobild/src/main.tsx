import ReactDOM from 'react-dom/client'

//導入provider
import { RouterProvider } from 'react-router-dom'
//導入router實例
import { router } from './router'

//測試接口
// import { fetchChannelAPI } from '@/apis/list.ts'

// fetchChannelAPI().then(res=>{
//   console.log(res.data)
// })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
