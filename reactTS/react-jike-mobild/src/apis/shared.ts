//1. 定義泛型(因為很多接口都是一樣的)
export type ResType<T> = {
    message:string
    data:T
}