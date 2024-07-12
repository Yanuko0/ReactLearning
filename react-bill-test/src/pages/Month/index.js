import { NavBar, DatePicker } from "antd-mobile";
import './index.scss'
import { useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";

const Month = () => {
    //控制彈框的打開和關閉
    const [ dateVisible , setDateVisible] = useState(false)

    //控制時間顯示
    const [ currentDate, setCurrentDate] = useState(()=>{
        return dayjs(new Date()).format('YYYY-MM')
    })

    const onConfirm = (date) =>{
        setDateVisible(false)
        //其他邏輯
        console.log(date)
        const formatDate = dayjs(date).format('YYYY-MM')
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
                            <span className="money">{100}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{200}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{200}</span>
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