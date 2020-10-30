import React from 'react';
import { Layout, Divider, Card, Typography, Progress, Button } from 'antd';
import 'antd/dist/antd.css';
import './card.scss';

const Cards = ({ user }) => {
    const { Text } = Typography;
    console.log(user);
    let awsAnswered = 0;
    user.aws_answers.map(answer => {
        if (answer && answer.question && answer.question.length > 0) {
            awsAnswered++;
        }
        return answer;
    });
    let pythonAnswered = 0;
    user.python_answers.map(answer => {
        if (answer && answer.question && answer.question.length > 0) {
            pythonAnswered++;
        }
        return answer;
    });
    let sqlAnswered = 0;
    user.sql_answers.map(answer => {
        if (answer && answer.question && answer.question.length > 0) {
            sqlAnswered++;
        }
        return answer;
    });
    const awsPercentage = awsAnswered * 20;
    const pythonPercentage = pythonAnswered * 20;
    const sqlPercentage = sqlAnswered * 20;

    const handleAWSClick = () => {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/questions/aws';
    }
    const handleMYSQLClick = () => {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/questions/mysql';
    }
    const handlePythonClick = () => {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/questions/python';
    }

    return (
        <Layout className='admin'>
            <Divider/>
            <Card
                title={user ? user.name : ''}
                style={{ width: '90%' }}
                className='cards'
            >
                <Layout className='progress'>
                    <Layout className='text'>
                        <Text strong>AWS</Text>
                    </Layout>
                    <Layout className='bar'>
                        <Progress percent={awsPercentage} status="active"/>
                    </Layout>
                </Layout>
                <Button type="primary" className='button' onClick={() => { handleAWSClick() }}>
                    View answers
                </Button>
                <Divider className='divide'/>
                <Layout className='progress'>
                    <Layout className='text'>
                            <Text strong>Python</Text>
                    </Layout>
                    <Layout className='bar'>
                        <Progress percent={pythonPercentage} status="active"/>
                    </Layout>
                </Layout>
                <Button type="primary" className='button' onClick={() => { handlePythonClick() }}>
                    View answers
                </Button>
                <Divider className='divide'/>
                <Layout className='progress'>
                    <Layout className='text'>
                        <Text strong>MySQL</Text>
                    </Layout>
                    <Layout className='bar'>
                        <Progress percent={sqlPercentage} status="active"/>
                    </Layout>
                </Layout>
                <Button type="primary" className='button' onClick={() => { handleMYSQLClick() }}>
                    View answers
                </Button>
            </Card>
            {/* {isAwsClicked && <AWS />}
            {isSqlClicked && <MySQL />}
            {isPythonClicked && <PYTHON />} */}
        </Layout>
    );
};

export default Cards;