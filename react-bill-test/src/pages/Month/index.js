import { NavBar, DatePicker } from "antd-mobile";
import './index.scss'
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from 'lodash'


const Month = () => {
    //按月做數據的分組
    const billList = useSelector(state => state.bill.billList)
    const monthGroup = useMemo(()=>{
        //return出去計算之後的值
        return _.groupBy(billList,(item)=> dayjs(item.date).format('YYYY-MM'))
    },[billList])

    console.log(monthGroup)

    //控制彈框的打開和關閉
    const [ dateVisible , setDateVisible] = useState(false)

    //控制時間顯示
    const [ currentDate, setCurrentDate] = useState(()=>{
        return dayjs(new Date()).format('YYYY-MM')
    })

    const [currentMonthList, setCurrentMonthList] = useState([])

    const monthResult = useMemo(()=>{
        //支出   /收入  /結餘
        const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a,c) => a+c.money , 0)

        const income = currentMonthList.filter(item => item.type === 'income').reduce((a,c) => a+c.money , 0)

        return{
            pay,
            income,
            total:pay + income
        }


    },[currentMonthList])

    //初始化時把當前月的統計數據顯示出來
    useEffect(()=>{
        const nowDate = dayjs().format('YYYY-MM')
        //邊界值控制
        if(monthGroup[nowDate]){
            setCurrentMonthList(monthGroup[nowDate])
        }
    },[monthGroup])

    //確認回調
    const onConfirm = (date) =>{
        setDateVisible(false)
        //其他邏輯
        console.log(date)
        const formatDate = dayjs(date).format('YYYY-MM')
        console.log(formatDate)
        setCurrentMonthList(monthGroup[formatDate])
        setCurrentDate(formatDate)
    }

    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                月度收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 時間切換區域 */}
                    <div className="date" onClick={()=>{setDateVisible(true)}}>
                        <sapn className="text">
                            {currentDate + ""}月帳單
                        </sapn>
                        {/* 思路:控制當前彈框打開的狀態 控制expand類名是否存在 */}
                        <span className={classNames('arrow',dateVisible && 'expand')}></span>
                    </div>
                    {/* 統計區域 */}
                    <div className="twoLineOverview">
                        <div className="item">
                            <span className="money">{monthResult.pay.toFixed(2)}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.income.toFixed(2)}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.total.toFixed(2)}</span>
                            <span className="type">結餘</span>
                        </div>
                    </div>
                    <DatePicker
                        className="kaDate"
                        title="記帳日期"
                        precision="month"
                        visible={dateVisible}
                        max={new Date()}
                        onCancel={()=>setDateVisible(false)}
                        onConfirm={onConfirm}
                        onClose={()=>setDateVisible(false)}
                        />
                </div>
            </div>
        </div>
    )
}

export default Month