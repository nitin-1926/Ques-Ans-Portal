import { useState } from "react";
import axios from 'axios';

export default () => {
    const[message, setMessage] = useState('');
    const[userData, setUserData] = useState([]);

    const getCandidates = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/getAllUserData');
            if(response.data.message === 'successful'){
                setMessage(response.data.message);
                setUserData(response.data.data);
                // console.log(userData);
            } else {
                setMessage('Something went wrong');
            }
        }
        catch(e) {
            setMessage('Something went wrong');
            console.log(e);
        }
    }
    return [getCandidates, message, userData];
};