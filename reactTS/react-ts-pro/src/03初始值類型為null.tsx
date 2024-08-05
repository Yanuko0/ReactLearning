// react + ts
import { useState } from "react"

type User = {
    name: string
    age: number
}

function App() {
 const [user, setUser] = useState<User | null>(null)

 const changeUser = () => {
    setUser(null)
    setUser({
        name: 'jack',
        age: 18,
    })
 }
  return (
    <>
    {/* //為了類型安全 可選鏈做類型守衛 */}
    {/* //只有user不為null(不為空值) 的時後才進行點運算 */}
    <button onClick={changeUser}>點擊</button>
        {user?.age}
    </>
  )
}

export default App
