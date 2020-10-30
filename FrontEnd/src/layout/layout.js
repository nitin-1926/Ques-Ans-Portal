import React from 'react';
import { Layout } from 'antd';
import Navbar from '../components/Navbar/navbar';

const BodyLayout = (props) => {
    return (
        <Layout className="main-container" style={{background: 'transparent'}}>
            <Navbar/>
            {props.children}
        </Layout>
    );
};

export default BodyLayout;