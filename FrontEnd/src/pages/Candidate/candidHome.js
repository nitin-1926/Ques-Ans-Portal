import React from 'react';
import { Layout, Row, Col, Button, Card, Grid } from 'antd';
import 'antd/dist/antd.css';
import './candidHome.scss';
import awsImage from '../../assets/images/aws.jpg';
import pythonImage from '../../assets/images/python.jpg';
import sqlImage from '../../assets/images/mysql.jpg';

const CandidateHome = () => { 
    const { Meta } = Card;
    return (
        <Layout style={{overflow: 'hidden'}}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" style={{padding: '48px'}}>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img style={{height: '200px'}} alt="AWS" src={awsImage} />}
                        onClick={() => window.location.href = '/questions/aws'}
                    >
                        <Meta title="AWS Test" description='Created by: Nitin Sir' />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img style={{height: '200px'}} alt="AWS" src={pythonImage} />}
                        onClick={() => window.location.href = '/questions/python'}
                    >
                        <Meta title="Python Test" description='Created by: Nitin Sir' />
                    </Card> 
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img style={{height: '200px'}} alt="AWS" src={sqlImage} />}
                        onClick={() => window.location.href = '/questions/mysql'}
                    >
                        <Meta title="MySQL Test" description='Created by: Nitin Sir' />
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
};

export default CandidateHome;
