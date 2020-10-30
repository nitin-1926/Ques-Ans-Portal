import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import './candidHome.scss';

const CandidateHome = () => {    
    return (
        <Layout className='candid-home'>
            <Row className='options-layout'>
                <Col className='options aws' span={8}>
                    <Button className='button' onClick={() => window.location.href = '/questions/aws'}>AWS</Button>
                </Col>
                <Col className='options python' span={8}>
                    <Button className='button' onClick={() => window.location.href = '/questions/python'}>Python</Button> 
                </Col>
                <Col className='options sql' span={8}>
                    <Button className='button' onClick={() => window.location.href = '/questions/mysql'}>MySQL</Button>
                </Col>
            </Row>
        </Layout>
    );
};

export default CandidateHome;
