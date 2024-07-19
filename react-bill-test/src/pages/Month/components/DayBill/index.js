import classNames from "classnames";
import './index.scss'
import { useMemo, useState } from "react";
import { billTypeToName } from "@/contants/index";
import Icon from "@/components/icon";

const DailyBill = ({date, billList}) =>{

    const dayResult = useMemo(()=>{
        //支出   /收入  /結餘
        const pay = billList.filter(item => item.type === 'pay').reduce((a,c) => a+c.money , 0)

        const income = billList.filter(item => item.type === 'income').reduce((a,c) => a+c.money , 0)

        return{
            pay,
            income,
            total:pay + income
        }
    },[billList])

    //控制展開收起
    const [visible, setVisible] = useState(false)

    return(
        <div className={classNames('dailyBill')}>
            <div className="header">
                <div className="dateIcon">
                    <span className="date">{date}</span>
                    {/* expand 如果有這個類名 展開的箭頭朝上 */}
                    <span className={classNames('arrow', visible && 'expand')}
                    onClick={() => setVisible(!visible)}></span>
                </div>
                <div className="oneLineOverview">
                    <div className="pay">
                        <span className="type">支出</span>
                        <span className="money">{dayResult.pay.toFixed(2)}</span>
                    </div>
                    <div className="income">
                        <span className="type">收入</span>
                        <span className="money">{dayResult.income.toFixed(2)}</span>
                    </div>
                    <div className="balance">
                        <span className="money">{dayResult.total.toFixed(2)}</span>
                        <span className="type">結餘</span>
                    </div>
                </div>
            </div>
            {/* 單日列表 */}
            <div className="billList" style={{display:visible?'block':'none'}}>
                {billList.map(item =>{
                    return(
                        <div className="bill" key={item.id}>
                            {/* 圖標 */}
                            <Icon type={item.useFor}/>
                            <div className="detail">
                                <div className="billType">{billTypeToName[item.useFor]}</div>
                                <div className={classNames('money',item.type)}>
                                    {item.money.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default DailyBill