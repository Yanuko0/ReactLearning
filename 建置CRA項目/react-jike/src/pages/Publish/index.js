import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select,
    message,
} from 'antd'
import { PlusOutlined } from "@ant-design/icons"
import { Link, useSearchParams } from 'react-router-dom'
import './index.scss'

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { createArticleAPI, getArticleById, getChannelAPI, updateArticleAPI } from '@/apis/article'
import { type } from '@testing-library/user-event/dist/type'
import { useChannel } from '@/hooks/useChannel'

const { Option } = Select

const Publish = () => {
    //獲取頻道列表
    // const [channelList, setChannelList] = useState([])

    // useEffect(() => {
    //     //1.封裝函數 在函數體內調用接口
    //     const getChannelList = async () => {
    //         const res = await getChannelAPI()
    //         setChannelList(res.data.channels)
    //     }
    //     //2.調用函數
    //     getChannelList()
    // }, [])
    const { channelList } = useChannel()

    //提交表單
    const onFinish = (formValue) => {
        console.log(formValue)
        //校驗封面類型imageType是否和實際的圖片列表imageList數量是相等的
        if(imageList.length !== imageType) return message.warning('封面類型和圖片數量不匹配')
        const { title, content, channel_id } = formValue
        // 1.按照接口文檔的格式處理收集到的表單數據
        const reqData = {
            // title: title,
            // content: content,
            // cover:{
            //     type:0,
            //     images:[]
            // },
            // channel_id: channel_id
            // 可簡寫成.
            title,
            content,
            cover: {
                type: imageType, //當前的封面模式
                //這裡的url處理邏輯只是在新增時的邏輯
                //編輯時也需要做處理
                images: imageList.map(item=> 
                    // item.response.data.url
                    {if(item.response){
                        return item.response.data.url
                       } else {
                        return item.url
                       }}
                ) //圖片列表
            },
            channel_id
        }
        // 2.調用接口提交
        //處理調用不同的接口 新增 - 新增接口 編輯狀態-更新接口 id
        if(articleId) {
            //更新街口
            updateArticleAPI({...reqData, id: articleId})
        } else {
        createArticleAPI(reqData)
        }
    }

    //上傳回調
    const [imageList, setImageList] = useState([])
    const onChange = (value) => {
        console.log('正在上傳中', value)
        setImageList(value.fileList)
    }

    //切換圖片封面類型
    const [imageType, setImageType] = useState(0)
    const onTypeChange = (e) => {
        console.log('切換封面了', e.target.value)
        setImageType(e.target.value)
    }

    //回填數據
    const [searchParams] = useSearchParams()
    const articleId = searchParams.get('id')
    //獲取實例
    const [form] =Form.useForm()
    console.log(articleId)
    useEffect(()=>{
        // 1.通過id獲取數據
        async function getArticleDetail(){
            const res = await getArticleById(articleId)
            const data = res.data
            const { cover } = data
            form.setFieldsValue({
                // ...res.data,
                // type: res.data.cover.type
                // 先優化成 res被data取代
                // ...data,
                // type :data.cover.type
                // 因為data.cover用了三次用解構再度優化
                ...data,
                type: cover.type
            })
            // 為什麼現在寫法無法回填封面?
            // 數據結構的問題 
            // 需要set方法 -> { type: 3 } 但現在res.data{ cover: { type: 3 }}

            // 回填圖片列表
            setImageType(cover.type)
            // 顯示圖片({url:url})
            setImageList(cover.images.map(url=>{
                return { url }
            }))
            
        }
        //只有有id時才能調用此函數回填
        if(articleId) {
        getArticleDetail()
        }
        // 2.調用實例方法 完成回填

    },[articleId, form])


    return (
        <div className='publish'>
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首頁</Link> },
                        { title: `${articleId ? '編輯' : '新增'}文章` },
                    ]}
                    />
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ type: 0 }}
                    onFinish={onFinish}
                    form={form}
                >
                    <Form.Item
                        label="標題"
                        name="title"
                        rules={[{ required: true, message: '請輸入文章標題' }]}
                    >
                        <Input placeholder='請輸入文章標題' style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label='頻道'
                        name="channel_id"
                        rules={[{ required: true, message: '請選擇文章頻道' }]}
                    >
                        <Select placeholder='請選擇文章頻道' style={{ width: 400 }}>
                            {/* value屬性用戶選種之後會自動收集起來作為接口的提交字段 */}
                            {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group onChange={onTypeChange}>
                                <Radio value={1}>單圖</Radio>
                                <Radio value={3}>三圖</Radio>
                                <Radio value={0}>無圖</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {/*
                            listType: 決定選擇文件框的外觀樣式
                             showUploadList: 控制顯示上傳列表
                        */}
                        {imageType > 0 &&
                        <Upload
                            listType='picture-card'
                            showUploadList
                            action={'http://geek.itheima.net/v1_0/upload'}
                            name='image'
                            onChange={onChange}
                            maxCount={imageType}
                            fileList={imageList}
                        >
                            <div style={{ marginTop: 8 }}>
                                <PlusOutlined />
                            </div>
                        </Upload>
                        }
                    </Form.Item>
                    <Form.Item
                        label='內容'
                        name="content"
                        rules={[{ required: true, message: '請輸入文章內容' }]}
                    >
                        {/* 富文本編輯器 */}
                        <ReactQuill
                            className='publish-quill'
                            theme='snow'
                            placeholder='請輸入文章內容'
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size='large' type='primary' htmlType='submit'>
                                發布文章</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish