import Icon from "@/components/icon"
import { billListData } from "@/contants"
import { Button, DatePicker, Input, NavBar } from "antd-mobile"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"
import './index.scss'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addBillList } from "@/store/modules/billStore"
import dayjs from "dayjs"




const New = () =>{
    const navigate = useNavigate()

    //1.準備一個控制收入支出的狀態
    const [billType, setBillType] = useState('pay') //pay-支出 income-收入
    const [money, setMoney] = useState(0)
    const moneyChanege = (value) =>{
        setMoney(value)
    }

    //收集帳單類型
    const [useFor, setUseFor] = useState('')
    const dispatch = useDispatch()

    //保存帳單
    const saveBill = () =>{
        //收集表單數據
        const data = {
            type:billType,
            money:billType ==='pay'? -money : +money,
            date:date,
            useFor:useFor,
        }
        console.log(data)
        dispatch(addBillList(data))
    }

    //存儲選擇的時間
    const [date, setDate] = useState()
    //控制時間打開關閉
    const [dataVisible, setDataVisible] = useState(false)
    //確認選擇時間
    const dateConfirm = (value) =>{
        console.log(value)
        setDate(value)
        setDataVisible(false)
    }

    return(
        <div className="keepAccounts">
            <NavBar className="nav" onBack={() => navigate(-1)}>
            記一筆
            </NavBar>

             <div className="header">
                <div className="kaType">
                    <Button
                        shape="rounded"
                        className={classNames(billType ==='pay'?'selected':'')}
                        onClick={()=>setBillType('pay')}
                        >
                            支出
                    </Button>
                    <Button
                        className={classNames(billType === 'income'?'selected':'')}
                        shape="rounded"
                        onClick={()=>setBillType('income')}>
                            收入
                    </Button>
                </div>

                <div className="KaFormWrapper">
                    <div className="kaForm">
                        <div className="date">
                            <Icon type="calenoar" className="icon"/>
                            <span className="text" 
                            onClick={()=>setDataVisible(true)}
                            >{dayjs(date).format('YYYY-MM-DD')}</span>
                            {/* 時間選擇器 */}
                            <DatePicker
                                className="kaDate"
                                title="記帳日記"
                                max = {new Date()}
                                visible={dataVisible}
                                onConfirm={dateConfirm}
                            />
                        </div>
                        <div className="KaInput">
                            <Input
                                className="input"
                                placeholder="0.00"
                                type="number"
                                value={money}
                                onChange={moneyChanege}
                            />
                            <span className="iconYuan">￥</span>
                        </div>
                    </div>
                </div>
             </div>

             <div className="KaTypeList">
                {/* 數據區域 */}
                {billListData[billType].map(item => {
                    return(
                        <div className="kaType" key={item.type}>
                            <div className="title">{item.name}</div>
                            <div className="list">
                                {item.list.map(item =>{
                                    return(
                                        //selected
                                        <div className={
                                        classNames(
                                            'item',
                                            useFor === item.type ? 'selected' : ''
                                        )}
                                        key={item.type}
                                        onClick={()=>setUseFor(item.type)}>

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
                    <Button className="btn save" onClick={saveBill}>
                        保存
                    </Button>
                </div>
        </div>
    )
}

export default New