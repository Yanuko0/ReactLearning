// ------------------------------------------------------------------------

// 編輯文章-回填基礎數據
// 實現效果: 把頁面中除了封面之外的其餘字段完成回填

// 如何實現:
// 1.通過文章id獲取到文章詳情數據
// 2.調用Form組件實例方法 setFieldsValue 回顯數據

// ------------------------------------------------------------------------

// 編輯文章-回填封面信息
// 實現效果: 回填封面的類型以及上傳過的封面圖片

// 如何實現:
// 1.使用cover中的type字段回填封面類型
// 2.使用cover中的images字段回填封面圖片

// ------------------------------------------------------------------------

// 編輯文章-根據id適配狀態

// 首頁/發布文章  首頁/編輯文章
// 實現效果: 發布文章時顯示發布文章 , 編輯文章狀態下顯示編輯文章

// 如何實現:
// 核心就是看是否有id, 有文章id代表編輯狀態, 沒有文章id代表發布狀態

// ------------------------------------------------------------------------

// 編輯文章-更新文章
// 實現效果:當用戶對文章內容做修改之後,點擊確認更新文章內容

// 如何實現:
// 更新文章和新增文章相比, 大部分的邏輯都是一致的, 稍作參數適配調用不同接口即可

// 1.適配url參數
// 2.調用文章更新接口