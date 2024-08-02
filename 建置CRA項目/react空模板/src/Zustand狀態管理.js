//zustand
import { create } from 'zustand'

//1. 創建store
//語法容易出錯
//1.函數參數必須返回一個對象, 對象內部編寫狀態數據和方法
//2. set用來修改數據的狀態的專門方法, 必須調用它來修改數據
//語法1: 參數是函數 需要用到老數據的場景
//語法2: 參數直接是一個對象 set({ count: 100 })

const useStore = create((set) => {
    return {
        //狀態數據
        count: 0,
        //修改狀態數據的方法
        inc:() => {
            set((state) => ({count: state.count + 1 }))
            // set({ count: 100 })
        }
    }
})

//2. 綁定store到組件
//useStore => 返回是一個對象{ 數據 , 修改數據的方法}

function Zustand () {
    const { count, inc} = useStore()
    return (
        <>
            <button onClick={inc}>{count}</button>
        </>
    )
}

export default Zustand