import React from 'react'
import "../lib/css/SassAndScss01.css"


// 一. Rubby Sass
// 基於rubby語言開發的sass產品(淘汰)
// 二. Dart sass
// 基於dart語言開發sass產品(現在)
// 三. Libsass
// 用c++語言開發的sass的開發接口,方便php、js對sass進行開發

// github下載提速
// 1.C:\Windows\System32\drivers\etc\hosts
// 192.30.253.112  github.com
// 151.101.185.194 github.global.ssl.fastly.net

// 一、dart sass安裝
// npm install sass
// 之後到這個資料夾下執行
// npx sass SassAndScss01.scss output.css

// 二、Css與map的關係
// 1.有map可以在瀏覽器f12 ->source中看到css後端的sass文件
// 2.沒有map則看不到(商用產品建議是no map)

// 去看scss Sass-Scss學習.scss檔案

// 一、scss語法
// #{}花括號式

// 二、sass語法
// #縮進式


// 語法結構
// 一.通用聲明
// 變量聲明:例如 $var: value
// 流控制規則 例如 @if 和 @each
// @error @warn @debug 規則
// 1.變量 2.流程控制 3.輸出語句

// 二、Css語句
// 風格規劃,如 h1{/*..*/}
// css規劃 如 @media 和 @font-face
// Mixin使用 @include
// 該at-root規則
// 1.@function 2.@mixin 3.@media 4.@at-root 5.css規則


// 三、頂級聲明
// 這些語句只能在樣式錶的頂層使用
// 1.@mixin 2.@use 3.@function
// 沒有在頂層會報錯

// 四、文字
// 最簡單的表達式僅表示靜態值
// 1.數字 2.字符串 3.顏色 4.布爾 5.列表 6.集合(映射)

// 五、運算符
// 1.等於 2.數學 3.比較 4.邏輯 5.字符串連結 6.單元(提高優先級)

// 六、其他表達式
// 1.var 2.nth 3.url 4.父選擇器& 5.!default

// 七、註釋
// 1.註釋類型 (會出現在css文件)

// 八、特殊函數
// 1.特殊函數
// #sass中的url可解析參數中的變量



export default function SassAndScss01() {
    return (
        <>
        <p>去看scss Sass-Scss學習.scss檔案</p>
            <div className='main'>
                <div className='header'>
                    <span>header</span>
                </div>
                <div className='bodyer'>
                    <span>bodyer</span>
                </div>

                <div className='footer'>
                    <span>footer</span>
                </div>
            </div>
        </>
    )
}
