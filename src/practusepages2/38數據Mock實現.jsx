import React from 'react'
import server from 'server'

export default function Mock() {
    // 模擬假數據
    // 什麼是數據Mock
    // 在前後端分類的開發模式下，前端可以在沒有實際後端街口的支持下，先進行接口數據的模擬,進行正常的業務功能開發

    // 市場常見的Mock方式
    // 1.前端直接寫假數據 : 純靜態,沒有服務
    // 2.自研Mock平台 : 成本太高
    // 3.json-server等工具 : 有服務,成本低

    // json-server實現數據Mock
    // json-server是一個node包,
    // 可以在不到30秒內獲取零編碼的完整Mock服務
    
    // 實現步驟:
    // 1.項目中安裝json-server
    //  npm i -D json-server
    // 2.準備一個json文件
    // 3.添加啟動命令

    // "server": "json-server ./server/data.json --port 8888"
    // 4.訪問接口進行測試

  return (
    <div>
      
    </div>
  )
}
