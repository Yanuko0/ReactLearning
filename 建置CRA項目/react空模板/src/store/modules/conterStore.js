const createCounterStore = (set) => {
    return {
        //狀態數據
        count: 0,
        //修改狀態數據的方法
        inc:() => {
            set((state) => ({count: state.count + 1 }))
            // set({ count: 100 })
        },
    }
}

export default createCounterStore