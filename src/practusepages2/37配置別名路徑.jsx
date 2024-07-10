import React from 'react'

// 1.路徑解析配置(webpack),把@/解析為src/
// 2.路徑聯想配置(VsCode),把VsCode在輸入@/時,
// 自動聯想出來對應的src/下的子級目錄

// 路徑解析配置(webpack)
// craco插件
// 路徑聯想配置(VsCode)
// jsconfig.json

// 路徑解析配置
// CRA本身把webpack配置包裝到了黑合里無法直接修改,需要借助一個插件-craco

// 配置步驟
// 1.安裝craco
// npm i-D @craco/craco
// 2.在項目的根目錄下創建配置文件
// craco.config.js
// 3.配置文件中添加路徑解析配置
// 4.包文件中配置啟動和打包命令

// const path = require('path')

// module.exports = {
//     //webpack配置
//     webpack:{
//         //配置別名
//         aliax:{
//             //約定:使用@表示src文件所在路徑
//             "e":path.resolve(__dirname,"src")
//         }
//     }
// }

// "scripts":{
//     "start":"craco start",
//     "build":"craco build"
// }

// 聯想路徑配置
// VsCode的聯想配置,需要我們在項目的目錄下面添加jsconfig.json文件,加入配置之後VsCode會自動讀取配置幫助我們自動聯想提示

// 配置步驟:
// 1.根目錄下新增配置文件- jsconfig.json
// 2.添加路徑提示配置

// {
//     "compilerOption":{
//         "baseUrl":"./",
//         "paths":{
//             "@/*":[
//                 "src/*"
//             ]
//         }
//     }
// }


export default function ConfigurationPath() {
  return (
    <div>
      
    </div>
  )
}
