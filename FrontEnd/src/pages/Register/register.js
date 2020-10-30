import React from 'react';
import { Form, Input, Button, Layout } from 'antd';
import 'antd/dist/antd.css';
import './register.scss';
const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16
    }
};

const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className='form-layout'>
             <Layout className="header-section">
                <h3 className="header-text">Register</h3>
            </Layout>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className='form'
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input className='input'/>
                    </Form.Item>
                    <Form.Item
                        label="Email Id"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email id!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input className='input'/>
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
                        className='input-area'
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item className='register-btn'>
                        <Button type="primary" htmlType="submit" className='button'>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>

            
    );
};

export default Register;