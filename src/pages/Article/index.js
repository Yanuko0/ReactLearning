import { useParams, useSearchParams } from "react-router-dom"

const Article = () =>{
    // 第一種方式
    // const [params] = useSearchParams()
    // const id = params.get('id')
    // const name = params.get('name')

    // 第二種方式
    const params = useParams()
    const id = params.id
    const name = params.name
    return (
    <div>
        我是文章{id}-{name}
    </div>
    )
}

export default Article