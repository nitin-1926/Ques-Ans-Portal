import React, { useState } from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import 'antd/dist/antd.css';
import './login.scss';
import { addNotification } from '../../common/common';
const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16
    }
};

const Login = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const onSuccessfulLogin = () => {
        setLoading(false);
        if(location.pathname === '/admin_login') {
            window.location.href = '/admin_home';
        } else {
            window.location.href = '/home';
        }
    }
    const candidateLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/login', data);
            if (response.data.message === 'successful') {
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('isLoggedIn', true);
                addNotification('candidateLoginSuccess', 'Login Successful', 'You have been logged in successfully', 'success', onSuccessfulLogin);
            } else {
                addNotification('candidateLoginFailed', 'Login Failed', `Sorry! Login Failed. ${response.data.message}`, 'error');
            }
        }
        catch(e) {
            addNotification('error', 'Error Occurred', `Some error occurred. ${e}`, 'error');
        }
    }

    const adminLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/admin_login', data);
            if(response.data.message === 'successful') {
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('isLoggedIn', true);
                sessionStorage.setItem('isAdmin', true);
                addNotification('adminLoginSuccess', 'Login Successful', 'You have been logged in successfully', 'success', onSuccessfulLogin);
            } else {
                addNotification('adminLoginFailed', 'Login Failed', `Sorry! Login Failed. ${response.data.message}`, 'error');
            }
        }
        catch(e) {
            addNotification('error', 'Error Occurred', `Some error occurred. ${e}`, 'error');
        }
    }

    const onFinish = (values) => { 
        setLoading(true)
        if(location.pathname === '/admin_login') {
            adminLogin(values);
        } else {
            candidateLogin(values);
        }
    };

    const onFinishFailed = (errorInfo) => {
        addNotification('error', 'Error Occurred', `Some error occurred. ${errorInfo}`, 'error');
    };

    return (
        <Layout className='login'>
            <Layout className="header-section">
                <h3 className="header-text">
                    {location.pathname === '/admin_login' ? 'Admin Login' : 'Candidate Login'}
                </h3>
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
                        label="Email Id"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter your email id!'
                        },
                        {
                            type: 'email',
                            message: 'Email id is not in valid formate!'
                        }
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
                            message: 'Please enter your password!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item className='register-btn'>
                        <Button type="primary" htmlType="submit" className='button' loading={loading}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>

            
    );
};

export default Login;