import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './adminHome.scss';

import Card from '../../components/Cards/cards';


const AdminHome = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function getUserData() {
            const result = await axios.get('http://localhost:9000/api/getAllUserData');
            if (result.data.message === 'successful') {
                setUserData(result.data.data);
            }
        }
        getUserData();
    }, []);

    return (     
        <div className="admin-home">  
            {
                userData.length > 0 ? userData.map((user, index) => {
                    return (                    
                        <Card user={user}/> 
                    )
                }) : ''
            }
        </div>           
    )
}

export default AdminHome;