import Icon from "@/components/icon"
import { billListData } from "@/contants"
import { Button, DatePicker, Input, NavBar } from "antd-mobile"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"
import './index.scss'


const New = () =>{
    const navigate = useNavigate()

    return(
        <div className="keepAccounts">
            <NavBar className="nav" onBack={() => navigate(-1)}>
            記一筆
            </NavBar>

             <div className="header">
                <div className="kaType">
                    <Button
                        shape="rounded"
                        className={classNames('selected')}>
                            支出
                    </Button>
                    <Button
                        className={classNames('')}
                        shape="rounded">
                            收入
                    </Button>
                </div>

                <div className="KaFormWrapper">
                    <div className="kaForm">
                        <div className="date">
                            <Icon type="calenoar" className="icon"/>
                            <span className="text">
                                {'今天'}
                            </span>
                            <DatePicker
                                className="kaDate"
                                title="記帳日記"
                                max = {new Date()}
                            />
                        </div>
                        <div className="KaInput">
                            <Input
                                className="input"
                                placeholder="0.00"
                                type="number"
                            />
                            <span className="iconYuan">￥</span>
                        </div>
                    </div>
                </div>
             </div>

             <div className="KaTypeList">
                {billListData['pay'].map(item => {
                    return(
                        <div className="kaType" key={item.type}>
                            <div className="title">{item.name}</div>
                            <div className="list">
                                {item.list.map(item =>{
                                    return(
                                        <div className={classNames('item','')}
                                        key={item.type}>

                                            <div className="icon">
                                                <Icon type={item.type}/>
                                            </div>
                                            <div className="text">{item.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
             </div>

                <div className="btns">
                    <Button className="btn save">
                        保存
                    </Button>
                </div>
        </div>
    )
}

export default New