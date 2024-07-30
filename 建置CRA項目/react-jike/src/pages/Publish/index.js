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
} from 'antd'
import { PlusOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'
import './index.scss'

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { getChannelAPI } from '@/apis/article'

const { Option } = Select

const Publish = () => {
    //獲取頻道列表
    const [channelList, setChannelList] =useState([])

    useEffect(()=>{
        //1.封裝函數 在函數體內調用接口
        const getChannelList = async() =>{
            const res = await getChannelAPI()
            setChannelList(res.data.channels)
        }
        //2.調用函數
        getChannelList()
    },[])

    return (
        <div className='publish'>
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首頁</Link> },
                        { title: '發布文章' },
                    ]}
                    />
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ type: 1 }}
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
                            {channelList.map(item=> <Option key={item.id} value={item.id}>{item.name}</Option>)}
                        </Select>
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