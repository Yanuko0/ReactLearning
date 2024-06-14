import React from 'react'
// import PractiseJsx1 from './01JsxMap渲染'

//父傳子
//1.父組件傳遞數據  子組件標籤身上綁定屬性
//2.子組件接收數據 props的參數去接收
function Son(props) {
    //props:對象包含父組件傳遞過來的所有數據
    // props可傳遞任意數據
    // 數字 字符串 布爾值 數組 對象 函數 jsx
    // props是只讀對象只能讀取不能修改
    // 要修改只能由父組件修改
    // props.name = "123" //不允許直接修改父組件傳遞過來的樹鋸

    console.log(props)
    // { name: 'this is app name' }中跟下方name={name}匹配
    // name:跟name匹配 
    // 'this is app name'跟{name}匹配
    return(
        <div>
            我是子組件,{props.name}
            <br/>
            jsx:{props.child}
        </div>
        // <div>
        //     this is son,{props.children}
        // </div>
    )
}

function ComponentPassingFromParentToChild() {
    const name = 'this is app name'
  return (
    <div>
       {/* <Son name={name}/> */}
       <Son 
       name={name}
       age={20}
       isTrue={false}
       list={['Vue','React']}
       obj={{name:'Mark'}}
       cb={()=>console.log(123)}
       child = {<span>this is a child</span>}
       />


    {/* //特殊的prop children */}

       {/* <Son>
        <span>this is span</span>
       </Son> */}
    </div>
  )
}

export default ComponentPassingFromParentToChild