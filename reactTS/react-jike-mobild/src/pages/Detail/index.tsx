import { DetailDataType, fetchDetailAPI } from "@/apis/detail"
import { NavBar } from "antd-mobile"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Detail = () => {

    const [detail, setDetail] = useState<DetailDataType | null>(null)

    //獲取路由參數
    const [params] = useSearchParams()
    const id = params.get('id')
    useEffect(()=>{
        const getDetail = async() => {
            try {
                const res = await fetchDetailAPI(id!) 
                setDetail(res.data.data)
            } catch (error) {
                throw new Error('fetch detail error')
            }
        }
        getDetail()
    },[id])

    //返回上一層
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    //數據返回之前 loading渲染佔位

    if(!detail){
        return <div>tihs is loading...</div>
    }

    //數據返回之後 正是渲染的內容

    return <div>
        <NavBar onBack={back}>{detail?.title}</NavBar>
        <div dangerouslySetInnerHTML={{
            __html: detail?.content,
        }}></div>
    </div>
}

export default Detail