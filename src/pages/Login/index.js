import { Link, useNavigate } from "react-router-dom"

const Login = () =>{
    const navigate = useNavigate()
    return (
    <div>
        我是登錄頁面
        {/* 聲明式寫法 */}
        <Link to='/article'>跳轉到文章頁</Link>
        {/* 命令式的寫法 */}
        <button onClick={()=>navigate('/article')}>點我跳轉文章</button>
        <button onClick={()=>navigate('/article?id=1001&name=jack')}>searchParams傳參</button>
        {/* 這邊下面這種方式要再去router的位置改動 */}
        <button onClick={()=>navigate('/article/1001')}>Params傳參</button>
        <button onClick={()=>navigate('/article/1001/Jack')}>Params傳多個參數</button>
    </div>
    )
}

export default Login