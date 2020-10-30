import { useState } from "react";
import axios from 'axios';
import { notification } from 'antd';

export default () => {
    const[message, setMessage] = useState('');
    const successLogin = () => {
        window.location.href = '/home';
    }
    const candidateLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/login', data);
            if (response.data.message === 'successful') {
                console.log('Response Message: ', response.data.message);
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('isLoggedIn', true);
                setMessage(response.data.message);
                notification['success']({
                    key: 'notification',
                    message: 'Login Successful',
                    description: 'You have been logged in successfully',
                    duration: 2,
                    placement: 'topRight',
                    style: {
                        width: 380,
                        height: 100,
                        backgroundColor: '#F6FFED',
                        border: 'solid 1px #B7EB8F',
                        color: 'black'
                    },
                    onClose: successLogin
                });
            } else {
                setMessage(response.data.message);
            }
        }
        catch(e) {
            setMessage('Something went wrong');
            console.log(e);
        }
    }
    return [candidateLogin, message];
};