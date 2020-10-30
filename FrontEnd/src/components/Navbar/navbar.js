import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserOutlined, LogoutOutlined, HomeOutlined } from '@ant-design/icons';
import './navbar.scss';


const Navbar = () => {
    const location = useLocation();
    const email = sessionStorage.getItem('email');
    const admin = sessionStorage.getItem('isAdmin');
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
                    <Link to={admin ? '/admin_home' : '/home'}>
                        <h1 className="logo-text">
                            <HomeOutlined style={{marginRight: '8px'}}/>
                            Training Portal
                        </h1>
                    </Link>
                </div>
                <div className="button-layout">
                    <Link to={admin ? '/admin_home' : '/home'}>
                        <h5 className="button-text">
                            <UserOutlined style={{marginRight: '8px'}}/>
                            {email}
                        </h5>
                    </Link>
                    <Link to={admin ? '/admin_login' : '/candidate_login'}>
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
                    <Link to='/candidate_login'><h1 className="logo-text">Training Portal</h1></Link>
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