import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PractiseJsx1 from '../practisepages/01JsxMap渲染';
import PractiseJsx2 from '../practisepages/02Jsx條件渲染';
import PractiseJsx3 from '../practisepages/03Jsx複雜條件渲染';
import Practisebutton1 from "../practisepages/04React事件綁定";
import ReactComponents1 from "../practisepages/05React組件"
import HookUseState from "../practisepages/06HookUseState"
import Practisestyle1 from "../practisepages/07基礎樣式處理"
import PractiseBilibiliComment from "../practisepages/08B站案例評論"
import FormControlledBinding from "../practisepages/09表單受控綁定"
import ReactGetDomByUseRef from "../practisepages/10React中獲取Dom"
import ComponentPassingFromParentToChild from "../practisepages/11組件中的傳遞父傳子"
import ComponentPassingFromChildToParent from "../practisepages/12組件中的子傳父"
import ComponentPassingSiblingComponents from "../practisepages/13組件中的兄弟組件互傳"
import UseConText from "../practisepages/14Context跨層級組件通信"
import HookUseEffect from "../practisepages/15HookUseEffect"



export default function Layout() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/01JsxMap渲染" element={<PractiseJsx1/>}/>
        <Route path='/02Jsx條件渲染' element={<PractiseJsx2/>}/>
        <Route path='/03Jsx複雜條件渲染' element={<PractiseJsx3/>}/>
        <Route path='/04React事件綁定' element={<Practisebutton1/>}/>
        <Route path='/05React組件' element={<ReactComponents1/>}/>
        <Route path='/06HookUseState' element={<HookUseState/>}/>
        <Route path='/07基礎樣式處理' element={<Practisestyle1/>}/>
        <Route path='/08B站案例評論' element={<PractiseBilibiliComment/>}/>
        <Route path='/09表單受控綁定' element={<FormControlledBinding/>}/>
        <Route path='/10React中獲取Dom' element={<ReactGetDomByUseRef/>}/>
        <Route path='/11組件中的傳遞父傳子' element={<ComponentPassingFromParentToChild/>}/>
        <Route path='/12組件中的子傳父' element={<ComponentPassingFromChildToParent/>}/>
        <Route path='/13組件中的兄弟組件互傳' element={<ComponentPassingSiblingComponents/>}/>
        <Route path='/14Context跨層級組件通信' element={<UseConText/>}/>
        <Route path='/15HookUseEffect' element={<HookUseEffect/>}/>
       
      </Routes>
      </div>
    </>
  )
}
