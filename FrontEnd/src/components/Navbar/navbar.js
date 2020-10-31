import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserOutlined, LogoutOutlined, HomeOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import './navbar.scss';


const Navbar = () => {
    const location = useLocation();
    const email = sessionStorage.getItem('email');
    const isAdmin = sessionStorage.getItem('isAdmin');
    const [user, setUser] = useState(sessionStorage.getItem('isLoggedIn'));

    const onPressLogout = () => {
        setUser(false);
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('isAdmin');
    }

    const LogInNavbar = () => {
        return (
            <div className="navbar">
                <div className="logo">
                    <Link to={isAdmin ? '/admin_home' : '/home'}>
                        <h1 className="logo-text">
                            <HomeOutlined style={{marginRight: '8px'}}/>
                            Ques Ans Portal
                        </h1>
                    </Link>
                </div>
                <div className="button-layout">
                    <Link>
                        <h5 className="button-text">
                            <UserOutlined style={{marginRight: '8px'}}/>
                            {email}
                            {isAdmin ? <Tag style={{marginLeft: '10px'}} color="red">Admin</Tag> : <Tag style={{marginLeft: '10px'}} color="green">Candidate</Tag>}
                        </h5>
                    </Link>
                    <Link to={isAdmin ? '/admin_login' : '/candidate_login'}>
                        <h5 className="button-text" style={{ marginRight: "80px" }} onClick={onPressLogout}>
                            <LogoutOutlined style={{marginRight: '8px'}}/>
                            Logout
                        </h5>
                    </Link>
                </div>
            </div>
        );
    };
    
    const LogOutNavbar = () => {
        return (
            <div className="navbar">
                <div className="logo">
                    <Link to='/candidate_login'><h1 className="logo-text">Ques Ans Portal</h1></Link>
                </div>
                <div className="button-layout">
                    <Link to={location.pathname === '/admin_login' ? '/candidate_login' :'/admin_login'}>
                        <h5 className="button-text">
                            {location.pathname === '/admin_login' ? 'Candidate Login' : 'Admin Login'}
                        </h5>
                    </Link>
                    <Link to='/register'>
                        <h5 className="button-text" style={{marginRight: "80px"}}>
                            Register
                        </h5>
                    </Link>
                </div>
            </div>
        );
    };

    if(user) {
        return LogInNavbar();
    } else {
        return LogOutNavbar();
    }

};

export default Navbar;