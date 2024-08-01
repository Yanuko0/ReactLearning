import { memo, useCallback, useState } from 'react'

const Input = memo(function Input ({ onChange }) {
    console.log('子組件重新渲染了')
    return <input type='text' onChange={(e) => onChange(e.target.value)} />
})

function AppUseCallBack () {
    //傳給子組件的函數
    // const changeHandler = (value) => console.log(value)
    const changeHandler = useCallback((value) => console.log(value),[])
    //觸發父組件重新渲染的函數
    const [count, setCount] = useState(0)
    return (
        <div className='App'>
            {/* 把函數作為prop傳給子組件 */}
            <Input onChange={changeHandler}/>
            <button onClick={()=> setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default AppUseCallBack