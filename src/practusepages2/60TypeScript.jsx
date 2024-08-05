// 詳情看reactTS>react-ts-pro

// # npm 7+，需要添加额外的 --：
// npm create vite@latest react-ts-pro -- --template react-ts
// npm i 
// npm run dev

const { useState, useRef, useEffect } = require("react");

//-------------------------------------------------------------------------

// useState與TS

// useState-自動推導
// 通常react會根據傳入useState的默認值來自動推導類型,不需要顯示標註類型
// const [value, toggle] = useState(false)
// 說明:
// 1.value: 類型為boolean
// 2.toggle: 參數類型為boolean

// react + ts

//根據初始值自動推斷
// 場景: 明確的初始值


// function App() {
//   const [value, toggle] = useState(false)

//   const [list, setList] = useState([1, 2, 3])

//   // const changeValue = () => {
//   //   toggle(true)
//   // }

//   const changeList = () => {
//     setList([4, 5, 6])
//   }

//   return (
//     <>
//      {/* {value} */}
//      {list}
//     </>
//   )
// }

//-------------------------------------------------------------------------

// useState-傳遞泛型參數

// useState本身是一個泛型函數, 可以傳入具體的字定義類型

// type User = {
//     name: String
//     age: number
// }

// const [user, setUser] = useState<User>()

// 說明:
// 1.限制useState函數參數的初始值必須滿足類型為: User | () => User
// 2.限制setUser函數的參數必須滿足類型為: User | () => User | undefined
// 3.user狀態數據具備User類型相關的類型提示


// react + ts


//語法先定義自定義類型

// type User = {
//     name: string
//     age: number
// }


// function App() {
//     //1.限制初始值的類型
//     // const [user, setUser] = useState<User>({
//     //     name:'jack',
//     //     age: 18
//     // })
//     // const [user, setUser] = useState<User>(() => {
//     //     return {
//     //         name: 'jack',
//     //         age: 18,
//     //     }
//     // })

//     const [user, setUser] = useState<User>({
//         name:'jack',
//         age: 18
//     })

//     // const changeUser = () => {
//     //     setUser({
//     //         name: 'json',
//     //         age: 28,
//     //     })
//     // }

//     const changeUser = () => {
//         setUser(() => ({
//             name: 'json',
//             age: 28,
//         }))
//     }
//----------------------------------------------------------------------------
// //只有useState<User>()是空值時, setUser才能用indefined 較少用
//     // const [user, setUser] = useState<User>()

//     // const changeUser = () => {
//     //     setUser(undefined)
//     // }

//   return (
//     <>
//     { user.name }
//     </>
//   )
// }

//-------------------------------------------------------------------------------

// useState-初始值為null

// 當我們不知道狀態的初始值是什麼, 將useState的初始值為null是一個常見的作法, 可以通過具體類型聯合null來做顯示註解

// type User = {
//     name: string
//     age: number
// }

// const [user, setUser] = useState<User | null>(null)

// 說明:
// 1.限制useState函數參數的初始值可以是User | null
// 2.限制setUser函數的參數類型 可以是 User | null

//-------------------------------------------------------------------------------

// props與TypeScript - 基礎使用
// 為組件prop添加類型, 本質是給函數的參數做類型註解, 可以使用type對象類型或者interface接口來做註解

// type Props = {
//     className: string
// }

// functiob Button(props: Props) {
//     const { className } = props
//     return <button className={className}>點我</button>
// }

// 說明: Button組件只能傳入名稱為classNmae的prop參數, 類型為string, 且為必填


//-------------------------------------------------------------------------------

// props與TypeScript - 為 children添加類型

// children是一個比較特殊的prop,支持多種不同類型數據的傳入,需要通過一個內置的ReactNode類型來做註解

// type Props = {
//     className: string
//     children: React.ReactNode
// }

// function Button(props: Props) {
//     const { className, childern } = props
//     return <button className={className}>{childern}</button>
// }

// 說明: 註解之後, children可以是多種類型, 包括: React.ReactElement 、 string、 number、React.ReactFragment、React.ReactPortal、boolean、nul、null、undefined

//-------------------------------------------------------------------------------

// props與TypeScript - 為事件prop添加類型

// 組件經常執行類型為函數的prop 實現子傳父, 這類prop重點在於函數參數類型的註解

// type Props = {
//     onGetMsg?: (msg: string) => void
// }

// function Son(props: Props) {
//     const { onGetMsg } = props

//     const clickHandler = () => {
//         onGetMsg?.('this is msg')
//     }

//     return <button onClick={clickHandler}>sendMsg</button>
// }

// return(
//     <>
//     <Son onGetMsg={(msg) => console.log(msg)}></Son>
//     </>
// )

// const getMsgHandler = (msg: string) => {
//     console.log(msg)
// }
// return(
//     <>
//     <Son onGetMsg={getMsgHangler}/>
//     </>
// )

// 說明:
// 1.在組件內部調用時需要遵守類型的約束, 參數傳遞需要滿足要求
// 2.綁定prop時如果綁定內聯函數直接可以推斷出參數類型, 否則需要單獨註解匹配的參數類型

//-------------------------------------------------------------------------------

// useRef與TS

// --獲取dom的場景, 可以直接把要獲取的dom元素的類型當成泛型參數傳遞給useRef,可以推導出.current屬性的類型

// function App(){
//     const domRef = useRef<HTMLInputElement>(null)

//     useEffect(() => {
//         domRef.current?.focus()
//     }, [])

//     return (
//         <>
//         <input ref={domRef} /></>
//     )
// }

// --引用穩定的儲存器
// 把useRef當成引用穩定的儲存器使用的場景,可以通過泛型傳入聯合類型來做, 比如定時器的場景:
// function App() {
//     const timerRef = useRef<number | undefined>(undefined)

//     useEffect(() => {
//         timerRef.current = setInterval(() => {
//             console.log('1')
//         }, 1000)

//         return () => clearInterval(timerRef.current)
//     }, [])
    
//     return <>this is div</>
// }