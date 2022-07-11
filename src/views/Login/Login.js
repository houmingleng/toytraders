import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import Particles from "react-tsparticles";
import axios from "axios";
import {useNavigate} from "react-router-dom";



export default function Login(){
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
        axios.get('http://localhost:8000/users?username='+values.username+'&password='+values.password+'&roleState=true').then(
            res => {
                if(res.data.length === 0) {

                }
                else{
                    localStorage.setItem("token" , JSON.stringify(res.data[0]) )
                    navigate('/home/')

                }
            }
        )
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div style={{background: 'white' , height:"100%" , overflow:"hidden"}}>
            <Particles height={document.documentElement.clientHeight}/>
            <div className="FromContainer">
            <Form
                name="normal"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 12,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}
