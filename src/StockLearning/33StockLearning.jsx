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

// 股票特性
// 1.成長型股票
// 處於成長階段的公司,通常會將獲利再投進公司,增加公司的成長潛力,成長股公司的營收 獲利通常會有一定程度的成長,整理配息較低,因次多數投資人比較重視公司的股價上升、市值成長

// 2.價值型股票
// 被市場低估的公司，整體價值股波動小，並且營收表現平淡，但由於營運狀況不錯，可能會受到部分投資人的看好，願意趁低價時就買下，通常投資人會更看重公司的基本面表現。

//3.配息型股票： 
//配息股公司成長較為緩慢，股價長期不容易有太大的變動，因而投資人會著重在豐厚且穩定的股利發放，適合偏好低風險、領股息的投資人。

// 如何看股票走勢圖
// 開盤價vs昨日收盤價
// 開盤後第1筆股票成交價金額，對比昨日的收盤價可以從中得知部分市場的情緒，不過還是要記得後續的股票價格仍會有變動。

// 成交量
// 如果當日股票成交量驟升，可能要留意是否法人進場，而當日成交量太低，也要關注是否有利空消息，或留意股票掛單賣不出去的情況

// 內外盤比例
// 從內外盤可以了解目前還未成交的股票報價，內盤可以看到5檔「委買價格 」，而外盤則顯示5檔「委賣價格」，投資人可以從內外盤比例，初步評估買賣雙方的情勢，當內盤強勢則代表購買意願強，股價可能會上漲，而外盤強勢則代表賣出意願高，股價可能會下跌。

// 長期股市大盤走勢要看

//    最高價   ------>|  --            --  |  <---最高價
//                   |    |--上影線-- |    |
//                   |  --            --  |  
//   收盤價 --->  ————————             ————————   <---開盤價
//               |  紅K線 |           |  黑K線  |
//               | (陽線) |           |  (陰線) |
//               |        |           |        |
//   開盤價 --->   ————————             ————————  <---收盤價
//                   |  --            --  |  
//                   |    |--下影線-- |    |
//    最低價  ------> |  --            --  |  <---最低價

// K線
// 顯示當日股票的開盤價、收盤價、最高及最低價格，紅色為股價上漲，綠色為股價下跌，而股票K線的尾巴越長，則代表當日股價起伏越大。K線目的是濃縮複雜的數字，讓投資人快速了解一段時期的股價變化。


// 移動平均線
// 又稱為股票MA線或均線，用來呈現過去一段期間市場的平均成交價，根據時間長短，常見可分為5日線、10日線、20日線（月線）、60日線（季線）。許多投資人會觀察短均線、長均線的變化，了解目前股價與過去的相對關係，藉此推測未來的趨勢。

// 企業報表怎麼看

//         指標	                   計算公式	                      評估目的
//    EPS (每股稅後盈餘)	   稅後淨利÷在外流通股數	     每股盈餘公式結果可看出每張股票能賺到多少錢
//    ROA (資產報酬率)	        稅後淨利÷總資產	         檢視公司運用資產可以獲得多少利潤的能力
//    ROE (股東權益報酬率)	    稅後淨利÷股東權益	        檢視公司運用股東資金賺錢的效率
//    PER (本益比)	              股價÷EPS	            了解投資人付多少錢才能賺回1元，同時意味著投資回本的速度
//    PBR (本淨比)	            股價÷每股淨值	          判斷股價是否偏離公司淨值，可用來了解一間公司的資產價值
//        殖利率	              現金股利÷股價          	用來了解長期投資特定股票，判斷每年能獲得多少股利


// 股票專有名詞
// 牛市	股市趨勢呈顯整體上漲
// 熊市	股市趨勢呈顯整體下跌
// 利多	影響股價上漲的的好消息
// 利空	影響股價下跌的的壞消息
// 放空	投資人看跌某檔股票，並以先賣後買的方式，利用股價下跌獲利，又稱做空、賣空
// 軋空	放空某檔股票，但股價並未如期下跌，反而呈現上漲趨勢，導致放空投資人因恐懼，而以更高的價格買回股票，造成股價繼續上漲
// 增資	上市或上櫃公司透過發行新的股票，幫公司籌措更多資金
// 減資	公司透過退還股東資金、減少流通股數，降低企業的資本額
// 委託	投資人透過券商進行股票買賣
// 撮合	股市中買方和買方的股票價格競價
// 股本	又稱股份，指公司透過流通在外的股票所籌到的資金總額
// 市值	市場價值總額的簡稱
// 權值股	市值在大盤指數占比重的公司
// 融資	以買進的股票作為抵押品，向券商借錢買股票，通常須自備40%的資金
// 融券	向券商借券，先以高價賣出，未來等股價下跌，再以低價買回還給券商
// 斷頭	投資人無法償還向券商借的錢，因而券商有權將股票強制賣出
// 交割	一手交錢一手交股票的意思，通常是成交2天後要付款
// 大戶	擁有龐大資金的投資人
// 拉高出貨	大戶賣出手中持股前，故意先將股價拉高，之後將股票倒給被高股價吸引的投資人
// 殺低吃貨	大戶故意拋售手中持股，使股價下跌，誘使其他投資人一同拋售，之後再以低價重新買回股票
// 隔日沖	大戶前一日強勢買進大量股票，使股價拉高到漲停板，吸引其他投資散戶，隔天一開高就將股票大量賣出
// 警示股	特定股票的漲跌幅、交易量、周轉率異常，進而引起證交所的注意，證交所可能會限制該股票的買賣
// 全額交割股	證交所判定某檔股票擁有高風險特質，無法經過正常T＋2交割流程，而是要先將錢匯入全額交割帳戶才能順利購買


// 股市行話總整理
// 割韭菜	因大戶操作而賠錢
// 護國神山	指台積電是穩固台股表現的龍頭企業
// 反指標	買哪支股票就跌，賣哪支就漲
// 本多終勝	資金足夠雄厚的投資人即使遇到下跌，也有能力承擔虧損，甚至不斷加碼進場，只要等到股價回來就會獲得最終勝利
// 睡公園	投資人大賠，戲稱自己快付不出房租，只能睡公園
// 抬轎	進場時機晚的投資人幫前面的人推升股價
// 壁紙	買入的股票一文不值，不如拿去貼牆壁
// 套牢／住套房	買入時的股價過高，遲遲等不到股價回到低點的時候
// 畢業	將投資的錢全數賠光，因而離開股市投資
// 多軍	看好某支股票而買進股票的投資人
// 空軍	看衰某支股票而放空股票的投資人
// 雞蛋水餃股	指在股票市場中，股價相對便宜的股票
// 牛皮股	不隨大盤變化的萬年不動股票
// 接刀	進場的時機還不到股價最低，買入後股價還是一直跌
// 跳水	意指股價迅速且大幅下跌
// 存骨	存股表現不佳，反而越存錢越少


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
