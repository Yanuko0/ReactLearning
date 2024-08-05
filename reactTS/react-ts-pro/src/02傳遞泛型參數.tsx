// react + ts


import { useState } from "react"

//語法先定義自定義類型

type User = {
    name: string
    age: number
}



function 傳遞泛型參數() {
    //1.限制初始值的類型
    // const [user, setUser] = useState<User>({
    //     name:'jack',
    //     age: 18
    // })
    // const [user, setUser] = useState<User>(() => {
    //     return {
    //         name: 'jack',
    //         age: 18,
    //     }
    // })

    const [user, setUser] = useState<User>({
        name:'jack',
        age: 18
    })

    // const changeUser = () => {
    //     setUser({
    //         name: 'json',
    //         age: 28,
    //     })
    // }

    const changeUser = () => {
        setUser(() => ({
            name: 'json',
            age: 28,
        }))
    }
//----------------------------------------------------------------------------
//只有useState<User>()是空值時, setUser才能用indefined 較少用
    // const [user, setUser] = useState<User>()

    // const changeUser = () => {
    //     setUser(undefined)
    // }

  return (
    <>
    { user.name }
    </>
  )
}

export default 傳遞泛型參數
