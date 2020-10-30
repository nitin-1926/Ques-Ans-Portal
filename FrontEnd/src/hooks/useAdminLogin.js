import { useState } from 'react';
import axios from 'axios';
import { notification } from 'antd';

export default () => {
    const[errMessage, setMessage] = useState('');
    const onSuccessfulAdminLogin = () => {
        window.location.href = '/admin_home';
    }
    const adminLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/admin_login', data);
            if(response.data.message === 'successful') {
                setMessage(response.data.message);
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('isLoggedIn', true);
                sessionStorage.setItem('isAdmin', true);
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
                    onClose: onSuccessfulAdminLogin
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
    return [adminLogin, errMessage];
}