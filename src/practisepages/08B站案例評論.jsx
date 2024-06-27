/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react'
import _, { uniqueId } from 'lodash'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import axios from 'axios'

export default function PractiseBilibiliComment() {

  //評論列表
  const list = [
    {
      rpid: 3,
      user: {
        uid: "13258165",
        avater: "http://toutiao.itheima.net/resources/images/98.jpg",
        uname: "周杰倫",
      },
      content: '唉呦,不錯哦',
      ctime: '10-18 08:15',
      like: 88,
    },
    {
      rpid: 2,
      user: {
        uid: "36080105",
        avater: "http://toutiao.itheima.net/resources/images/98.jpg",
        uname: "許蒿",
      },
      content: '我尋你千百度 日出到遲暮',
      ctime: '11-13 11:29',
      like: 90,
    },
    {
      rpid: 1,
      user: {
        uid: "30009257",
        avater: "http://toutiao.itheima.net/resources/images/98.jpg",
        uname: "立瑜",
      },
      content: '前端工程師',
      ctime: '05-29 04:38',
      like: 10000,
    }
  ]
  //當前登陸用戶信息
  const user = {
    //用戶id
    uid: '30009257',
    //用戶頭像
    avater: "http://toutiao.itheima.net/resources/images/98.jpg",
    uname: '立瑜',
  }
  //導航Tab數組
  const tabs = [
    { type: 'hot', text: '最熱' },
    { type: 'time', text: '最新' }
  ]


  // 1.使用useState去維護評論列表
  // 2.用map方法對數據列表進行變遍歷渲染
  // const [commentList, setCommentList] = useState(list)
  //改默認排序
  const [commentList, setCommentList] = useState(_.orderBy(list, "like", 'desc'))

  //利用後端返回的值
  // const [commentList, setCommentList] = useState([])

  // useEffect(()=>{
  //   //請求數據
  //   async function getList(){
  //     //axios請求
  //     const res = await axios.get(`http://localhost:3004/list`)
  //     setCommentList(res.data)
  //   }
  //   getList()
  // },[])

  //實現評論刪除
  // 1.需求只有自己的評論才顯示刪除按鈕
  // 2.點擊刪除按鈕,刪除當前評論,列表中不再顯示
  // 核心思路
  // 1.刪除顯示-條件渲染
  // 2.刪除功能-當拿到前項id以id為條件對評論列表做出filter過濾

  //刪除功能
  const handleDel = (id) => {
    console.log(id)
    // 對commentList做過濾處理
    // 點擊之後過濾commentList中rpid不等於1的
    // 等於點擊刪除後保留除了1以外其他的 1則刪除
    setCommentList(commentList.filter(item => item.rpid !== id))
  }

  // 渲染Tab + 點擊高亮實現

  // 需求:點擊哪個tab項,哪個做高亮處理
  // 核心思路:點誰就把誰的type(獨一無二的標識)記錄下來,
  // 然後和遍歷時的每一項type做匹配,匹配到誰就負責高亮的類名


  //tab切換功能
  //1.點擊誰就把誰的Tab記錄下來
  //2.通過紀錄的type和每一項遍歷時的type做匹配 控制激活類名的顯示

  const [type, setType] = useState('hot')

  const handleTabChange = (type) => {
    console.log(type)
    setType(type)
    //基於列表的排序
    if (type === "hot") {
      //根據點讚數排序
      //lodash
      // https://lodash.com/
      setCommentList(_.orderBy(commentList, 'like', "desc"))
    } else {
      //創建時間排序
      setCommentList(_.orderBy(commentList, 'ctime', "desc"))
    }
  }
  //1.點擊誰就把誰的Tab記錄下來
  console.log(type)


  // 需求 點擊最新時按列表創建時間排序(新的在前面),點擊最熱時按照點讚數做排序(多的在前)

  // 核心思路:
  // 把評論列表狀態數據進行不同的排序處理,當成新值傳給set函數重新渲染視圖
  // 在上面


  //發布評論
  // 1.獲取評論內容
  // 2.點擊按鈕發布評論
  const [content, setContent] = useState('')
  const inputRef = useRef(null)

  const handlePublish = () =>{
    setCommentList([
      ...commentList,
      {
        rpid: uuidv4(),//隨機id
        user: {
          uid: "30009257",
          avater: "http://toutiao.itheima.net/resources/images/98.jpg",
          uname: "立瑜",
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'), //格式化 月-日 時:分
        like: 10000,
      }
    ])
    // 1.清空內容 把控制input框的value狀態設置為空串
    setContent('')
    // 2.重新聚焦 拿到input dom(useRef)元素調用focus方法
    inputRef.current.focus()
  }

  // uuid
  // rpid要求一個唯一的隨機數

  // dayjs
  // ctime要求以當前時間為標準

  // B站評論案例-清空內容並重新聚焦
  // 1.清空內容 把控制input框的value狀態設置為空串
  // 2.重新聚焦 拿到input dom元素調用focus方法
  

  // 20繼續修改評論案例
  // 1.使用請求接口得方式獲取評論列表並渲染
  // 2.使用自定義hook函數封裝數據請求的邏輯
  // 3.把評論中的每一項抽象成一格獨立的組件實現渲染


  // 1.使用json-server工具模擬接口服務,通過axios發送接口請求
  // 2.使用useEffect調用接口獲取數據

  // 找到package.json
  // "scripts": {
  //  添加
  //   "serve": "json-serve db.json --port 3004"

  // },

  // 將評論列表封裝成組件
function Item({item,onDel}){
  return(
    <div className='reply-ltem'>
          {/* 頭像 */}
          <div className='root-reply-avatar'>
            <div className='bili-avatar'>
              <img className='bili-avatar-img' width="50px"
                src={item.user.avater} alt="" />
            </div>
          </div>
          
          <div className='content-wrap'>
            {/* 用戶名 */}
            <div className='user-info'>
              <div className='user-name'>{item.user.uname}</div>
            </div>
            {/* 評論內容 */}
            <div className='root-reply'>
              <span className='reply-content'>{item.content}</span>
              <div className='reply-info'>
                {/* 評論時間 */}
                <span className='reply-time'>{item.ctime}</span>
                {/* 評論數量 */}
                <span className='reply-time'>點讚數:{item.like}</span>
                {/* 條件:user.id === item.user.id 如果相等才顯示刪除 */}
                {user.uid === item.user.uid &&
                  <span className='delete-btn' 
                  // onClick={() => handleDel(item.rpid)}
                  onClick={() => onDel(item.rpid)}
                  >
                    刪除
                  </span>}
              </div>
            </div>
          </div>
        </div>
  )
}


  return (
    <div>
      {/* 導航tab */}
      <div className='reply-navigation'>
        <ul className='nav-bar'>
          <li className='nav-title'>
            <span className='nav-title-text'>評論</span>
            {/* 評論數量 */}
            <span className='total-reply'>{10}</span>
          </li>
          <li className='nav-sort'>
            {/* 高亮類名:active */}
            {tabs.map(item =>
              <span key={item.type}
                onClick={() => handleTabChange(item.type)}
                //  className='nav-item active'
                // className={`nav-item ${type === item.type && 'active'}`}
                className={classNames('nav-item', { active: type === item.type })}
              >

                {item.text}</span>
            )}

            {/* <span className='nav-item'>最熱</span> */}
          </li>
        </ul>
        <div>
            {/* 評論框 */}
            <textarea name="" id="" 
            placeholder='發布一條友善的評論'
            ref={inputRef}
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            >

            </textarea>
            {/* 發布按鈕 */}
            <div>
              <div className='send-text'
              onClick={handlePublish}
              >發布</div>
            </div>
          </div>
      </div>
      {/* 評論列表 */}
      {commentList.map(item => 
      <Item key={item.id} item={item} onDel={handleDel}/>)}
      <div></div>
    </div>
  )
}
