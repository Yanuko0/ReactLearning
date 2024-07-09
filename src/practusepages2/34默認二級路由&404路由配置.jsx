import React from 'react'

export default function DefaultSecondaryRoute() {
    // 默認二級路由
    // 當訪問的是一級路由時
    // 默認的二級路由組件可以得到渲染,
    // 只需要在二級路由的位置去掉path,設置index屬性為true

    // 404路由
    // 場景:當瀏覽器輸入url的路徑,在整個路由配置都找不到對應的path
    // 可以使用404兜底組件進行渲染

    // 實現步驟:
    // 1.準備一個NotFound組件
    // 2.在路由表數組的末尾,以*號作為路由path配置路由

    
  return (
    <div>
      
    </div>
  )
}
