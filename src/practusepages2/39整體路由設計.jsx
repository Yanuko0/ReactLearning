/* eslint-disable no-lone-blocks */
import React from 'react'

export default function RoutingDesign() {
//
//   ——————————————————————————————————————
//  |   ｜—————————|       ｜—————————|     |
//  |   ｜  month  |       ｜   year  |     |
//  |   ｜—————————|       ｜—————————|     |
//  |                Layout                 |
//   ——————————————————————————————————————
//   month、year是二級路由 Layout是一級路由
//
//   ——————————————————————————————————————
//  |                                       |
//  |                  new                  |
//  |                                       |
//  |                                       |
//   ——————————————————————————————————————
//          new是一級路由

// 結論
// 兩個一級路由(Layout/new)
// 兩個二級路由(Layout - month/year)

// antD-mobile主題訂製

// Solid Purple

// 定制方案:
// 1.全局定制
    // 整個應用範圍內的組件都生效

 // :root:root{
//     --adm-color-primary:#a062d4
// }

// 2.局部定制
    //只在某些元素內部的組件生效
    
// .purple-theme{
//     --adm-color-primary:#a062d4;
// }

{/* 
    <div className='purple-theme'>
    <Button color="primary">局部測試</Button>
    </div>
    <Button color="primary">測試</Button> 
*/}


  return (
    <div>
      
    </div>
  )
}
