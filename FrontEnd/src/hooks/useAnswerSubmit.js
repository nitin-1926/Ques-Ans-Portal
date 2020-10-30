import { useState } from "react";
import axios from 'axios';
import { notification } from 'antd';

export default () => {
    const[message, setMessage] = useState('');
    const onSuccessfulSubmit = () => {
        window.location.href = '/home';
    }
    const answerSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/submitAnswer', data);
            console.log(response);
            if (response.data.message === 'successful') {
                notification['success']({
                    key: 'notification',
                    message: 'Test Finished',
                    description: 'Your test has been finished and the answers are successfully submitted',
                    duration: 5,
                    placement: 'topRight',
                    style: {
                        width: 380,
                        height: 100,
                        backgroundColor: '#F6FFED',
                        border: 'solid 1px #B7EB8F',
                        color: 'black'
                    },
                    onClose: onSuccessfulSubmit()
                });
            } else {
                notification['error']({
                    key: 'error',
                    message: 'Test Submission Failed',
                    description: 'Your Test was not submitted successfully. Please try again later',
                    duration: 3,
                    placement: 'topRight',
                    style: {
                        width: 380,
                        height: 100,
                        backgroundColor: '#FFF2F0',
                        border: 'solid 1px #FFCCC7',
                        color: 'black'
                    },
                });
                setMessage('Something went wrong');
            }
        }
        catch(e) {
            setMessage('Something went wrong');
            console.log(e);
        }
    }
    return [answerSubmit, message];
};