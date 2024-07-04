import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 第一區
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
import HookUseEffectDependencies from "../practisepages/16UseEffect依賴項"
import HookUseEffectClearSideEffects from "../practisepages/17UseEffect清除副作用"
import HustomizeHook from "../practisepages/18自定義hook實現"
import Hookrule from '../practisepages/19ReactHook使用規則';
import HookuseXxxAxios from "../practisepages/20自定義函數封裝數據請求"
import LeadingRedux from "../practisepages/21Redux學習"
import ReduxCount from "../practisepages/22Redux實現Count"
import ReduxAction from "../practisepages/23提交action傳參"
import ReduxAsynchronous from "../practisepages/24異步操作"
import ReduxDevtools from '../practisepages/25Redux調適devtools';

// 第二區
import TakeawayCase from "../practusepages2/26美團外賣案例"
import ReactRouter from '../practusepages2/27ReactRouter快速開始';
import RouterLink from '../practusepages2/28ReactRouter跳轉';
import RouterLinkUpValue from '../practusepages2/29路由導航傳參';
import RouterConfiguration from '../practusepages2/30嵌套路由配置';

// Scss/Sass學習
import SassAndScss01 from '../SassAndScsspractusepages/31Sass和Scss學習01';
import SassAndScss02 from '../SassAndScsspractusepages/32Sass和Scss高級篇';

export default function Layout() {
  return (
    <>
    <div>
      {/* 第一區 */}
      {/* <Routes>
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
        <Route path='/16UseEffect依賴項' element={<HookUseEffectDependencies/>}/>
        <Route path="/17UseEffect清除副作用" element={<HookUseEffectClearSideEffects/>}/>
        <Route path="/18自定義hook實現" element={<HustomizeHook/>}/>
        <Route path="/19ReactHook使用規則" element={<Hookrule/>}/>
        <Route path="/20自定義函數封裝數據請求" element={<HookuseXxxAxios/>}/>
        <Route path="/21Redux學習" element={<LeadingRedux/>}/>
        <Route path="/22Redux實現Count" element={<ReduxCount/>}/>
        <Route path="/23提交action傳參" element={<ReduxAction/>}/>
        <Route path="/24異步操作" element={<ReduxAsynchronous/>}/>
        <Route path='/25Redux調適devtools' element={<ReduxDevtools/>}></Route>
      </Routes> */}
      <Routes>
      <Route path="/26美團外賣案例" element={<TakeawayCase/>}/>
      <Route path="/27ReactRouter快速開始" element={<ReactRouter/>}/>
      <Route path="/28ReactRouter跳轉" element={<RouterLink/>}/>
      <Route path="/29路由導航傳參" element={<RouterLinkUpValue/>}/>
      <Route path='/30嵌套路由配置' element={<RouterConfiguration/>}> </Route>
      <Route path='/31Sass和Scss學習01' element={<SassAndScss01/>}> </Route>
      <Route path='/32Sass和Scss高級篇' element={<SassAndScss02/>}> </Route>
      </Routes>
      </div>
    </>
  )
}
