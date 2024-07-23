import "./index.scss"
import {Card, Form, Input, Button} from "antd"
import logo from "@/assets/logo.png"
import { values } from "lodash"

const Login = () =>{
    const onFinish = (values) => {
        console.log(values)
    }
    return(
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""/>
                {/* 登錄表單 */}
                <Form onFinish={onFinish} validateTrigger="onBlur">
                    <Form.Item
                    name="mobile"
                    //多調校驗邏輯,先校驗第一條,第一條通過再校驗第二條
                    rules={[
                      {
                        required: true,
                        message: '請輸入手機號!',
                      },
                      {
                        pattern:/^(?:\+?886\-?|0)?9\d{8}$/,
                        message: '請輸入正確的手機號格式!',
                      }
                    ]}>
                        <Input size="large" placeholder="請輸入手機號碼"/>
                    </Form.Item>
                    <Form.Item
                    name="code"
                    rules={[
                      {
                        required: true,
                        message: '請輸入驗證碼!',
                      },
                    ]}>
                        <Input size="large" placeholder="請輸入驗證碼"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登錄
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login