import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import "../lib/css/33StockLearning.css"

// 手續費
// 購買金額的0.14525%,未滿20按20元計收
// 交易稅
// 政府收取0.3%交易稅(投資人賣出股票才會收取)
// 股利所得稅
// 股票或ETF除權息
// 股利所得合併/單一稅率分開計稅(分離課稅)

// 股票是否獲利
// 1.股票成本計算公式:買進成本(買進股票單價x股數) + 進出手續費(股票單價x股數x0.001425*2) + 交易稅(股票單價*股數*0.003)

// 2.股票獲利計算公式:(賣出股價-買進股價)x股數-總成本

// 台灣股票採T+2制度就是下單後第二個營業日 
// 券商才會正式扣款 或是成功賣出 隔2天 金額才會匯入交割戶

// 設定數量和欲購買的價位
// 當日有效(ROD):最常見的掛單模式，也就是當天掛單後，系統會持續搓合到收盤為止。
// 立即成交否則取消(IOC):允許成交符合條件的部分，其餘的沒有成交的部分就立即取消。
// 全部成交否則取消(FOK):：一定要全部成交，否則全部取消。


export default function StockLearning() {
  const { register, handleSubmit, setValue } = useForm();

  // 每股價格
  const [buyPricePerShare, setBuyPricePerShare] = useState('')
  // 買進張數
  const [buyCount, setBuyCount] = useState('')
  // 買進股數
  const [buySharesStock, setBuySharesStock] = useState('')

  // 賣出每股價格
  const [sellPricePerShare, setSellPricePerShare] = useState('')
  // 賣出張數
  const [sellCount, setSellCount] = useState('')
  // 賣出股數
  const [sellSharesStock, setSellSharesStock] = useState('')

  //買進金額
  const [purchaseAmount, setPurchaseAmount] = useState('')
  //賣出金額
  const [sellingAmount, setSellingAmount] = useState('')

  const onSubmit = async (formData) => [
    console.log(formData)
  ]

  useEffect(() => {
    setPurchaseAmount(buyPricePerShare * buyCount * buySharesStock)
  }, [buyPricePerShare, buyCount, buySharesStock])

  useEffect(() => {
    setSellingAmount(sellPricePerShare * sellCount * sellSharesStock)
  }, [sellPricePerShare, sellCount, sellSharesStock])


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='StockLearningBox'>
          {/* 第一排 */}
          <div>
            <div>
              <label htmlFor="">買進  每股價格:</label>
              <input type="text" {...register('買進每股價格')}
                value={buyPricePerShare}
                onChange={(e) => { setBuyPricePerShare(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="">買進張數:</label>
              <input type="text" {...register('買進張數')}
                value={buyCount}
                onChange={(e) => { setBuyCount(e.target.value) }} />
            </div>
            <div>
              <label htmlFor="">買進股數:</label>
              <input type="text" {...register('買進股數')}
                value={buySharesStock}
                onChange={(e) => { setBuySharesStock(e.target.value) }} />
            </div>
          </div>
          {/* 第二排 */}
          <div>
            <div>
              <label htmlFor="">賣出  每股價格:</label>
              <input type="text" {...register('賣出每股價格')}
                value={sellPricePerShare}
                onChange={(e) => { setSellPricePerShare(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="">賣出張數:</label>
              <input type="text" {...register('賣出張數')}
                value={sellCount}
                onChange={(e) => { setSellCount(e.target.value) }} />
            </div>
            <div>
              <label htmlFor="">賣出股數:</label>
              <input type="text" {...register('賣出股數')}
                value={sellSharesStock}
                onChange={(e) => { setSellSharesStock(e.target.value) }} />
            </div>
          </div>
          {/* 第三排 */}
          <div className='third'>
            {/* 第一排 */}
            <div>
              <div>
                <label htmlFor="">買進金額:</label>
                <input type="text" {...register('買進金額')}
                  value={purchaseAmount}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="">股票成本:</label>
                <input type="text"  {...register('買進股票成本')}
                  value={purchaseAmount + (purchaseAmount * 0.001425 * 2 < 20 ? 20 : purchaseAmount * 0.001425 * 2) + purchaseAmount * 0.003}
                  disabled
                />
              </div>
            </div>
            {/* 第二排 */}
            <div>
              <div>
                <label htmlFor="">賣出金額:</label>
                <input type="text" {...register('賣出金額')}
                  value={sellingAmount}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="">交易稅:</label>
                <input type="text" {...register('交易稅')}
                  value={purchaseAmount * 0.003}
                  disabled
                />
              </div>

            </div>
            <div>
              <div>
                <label htmlFor="">股票獲利:</label>
                <input type="text" {...register('股票獲利')}
                  value={sellingAmount - purchaseAmount}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="">手續費:</label>
                <input type="text" {...register('手續費')}
                  value={purchaseAmount * 0.001425 * 2 < 20 ? 20 : purchaseAmount * 0.001425 * 2}
                  disabled
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="">實領:</label>
                <input type="text" {...register('實領')}
                  value={sellingAmount - purchaseAmount - (purchaseAmount * 0.003) - (purchaseAmount * 0.001425 * 2 < 20 ? 20 : purchaseAmount * 0.001425 * 2)}
                  disabled
                />
              </div>
            </div>
          </div>

        </div>
      </form>
    </>
  )
}
