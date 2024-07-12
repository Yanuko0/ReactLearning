import React from 'react'

export default function ManagementAccountList() {
    // 用Redux管理帳目列表
//       -----------              ------------
//           RTK                    component
//     state-billList 
//   reducer-setBillList           
//        異步action     <----   dispatch異步action

// 需求理解和實現方式
// 使用antD的TabBar標籤欄組鍵進行布局以及路由的切換

// 實現方式: 看文檔(找到相似的Demo-複製代碼跑通-定制化修改)

// 1.靜態布局實現

// 2.切換路由實現

// 月度帳單
// 功能點
// 1.點擊切換月份
// 2.適配箭頭顯示
// 3.統計支出、收入、結餘數據

// 功能要求
// 1.點擊打開時間選擇框
// 2.點擊取消/確認按鈕以及蒙層區域都可以關閉彈框
// 3.彈框關閉時箭頭朝下,打開時箭頭朝上

// 基礎思路

// 準備一個狀態數據   通過切換狀態變化實現功能

// 點擊確定切換時間顯示

// 基礎思路:
// 1.創建一個控制時間顯示的狀態
// 2.拿到當前選中的時間賦值給狀態

// 帳單數據按月進行分組

// 1.從Redux中拿到數據

// 2.數據二次處理(useMemo)

// 3.按月分組邏輯實現(lodash)


  return (
    <div>
      
    </div>
  )
}
