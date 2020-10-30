import React, { useState } from 'react';
import { 
    Layout,
    Row,
    Col,
    Typography,
    Button,
    Divider,
    Input,
    Image,
    notification
} from 'antd';
import 'antd/dist/antd.css';
import './questionLayout.scss';

import useAnswerSubmit from '../../hooks/useAnswerSubmit';

const QuestionLayout = ({ questions, test }) => {
    const [answer, setAnswer] = useState('');
    const [number, setNumber] = useState(0);
    const [answersArray, setAnswersArray] = useState([]);
    const [answerSubmit] = useAnswerSubmit();
    const email = sessionStorage.getItem('email');
    const length = questions.length;
    const { Title, Paragraph } = Typography;
    const { TextArea } = Input;
    const isAdmin = sessionStorage.getItem('isAdmin') || false;
    const userData = sessionStorage.getItem('user');
    const user = JSON.parse(userData);
    console.log(user);
    const onPressFinish = () => {
        const data = {
            email,
            test,
            answersArray
        }
        answerSubmit(data);
    }

    const onPressNext = () => {
        setNumber(number + 1);
        setAnswer('');
    };

    const onPressPrev = () => {
        if(number !== 0){
            setNumber(number - 1);
        }
    };

    const onPressSubmit = () => {
        const tempArray = answersArray;
        const input = {'number': number+1, 'question': questions[number].question, 'answer': answer}
        if(tempArray[number]){
            tempArray[number] = input;
        } else {
            tempArray.push(input);
            setAnswersArray(tempArray);
        }
		notification['success']({
			key: 'notification',
			message: 'Submit Successful',
			description: 'Your answer was submitted successfully',
			duration: 2,
			placement: 'topRight',
			style: {
				width: 380,
				height: 100,
				backgroundColor: '#F6FFED',
				border: 'solid 1px #B7EB8F',
				color: 'black'
			}
		});
    }

    return (
        <Layout className='mysql'>
            <Row className='problem-layout'>
                <Col className='question-layout' span={12}>
                    <Typography className='question'>
                        <Title level={3}>Question No. {number + 1}</Title>
                        <Paragraph strong>
                            <blockquote>
                                {questions[number].question}
                            </blockquote>
                        </Paragraph>
                    </Typography>
                    <Layout className='image'>
                        {test === 'MYSQL' && <Image
                            src={require('../../assets/images/northwind-er-relationship.png')}
                            alt="er-diagram"
                            className="er-image"
                        />}
                    </Layout>
                    <Layout className='button-layout'>
                        {!isAdmin && <Button type="primary" className='button' onClick={onPressPrev} disabled={number === 0}>
                            Prev
                        </Button>}
                        <Button type="primary" className='button' onClick={onPressNext} disabled={!(number !== length - 1)}>
                            Next
                        </Button>
                        {!isAdmin && <Button type="primary" className='button' onClick={onPressFinish} disabled={(number < length - 1)}>
                            Finish
                        </Button>}
                    </Layout>
                </Col>
                <Divider type="vertical" style={{height: '100%'}}/>
                {!isAdmin && <Col className='input-answer' span={12}>
                    <Layout className='input-area'>
                        <TextArea
                            autoSize={{ minRows: 25, maxRows: 6 }}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </Layout>
                    <Layout className='button-layout'>
                        <Button type="primary" onClick={onPressSubmit}>Submit</Button>
                        <Button type="primary" className='button' onClick={() => setAnswer('')}>Reset</Button>
                    </Layout>
                </Col>}
                {isAdmin && <Col className='input-answer' span={12}>
                    <Layout className='input-area'>
                    <Paragraph strong>Candidate name: {user.name}</Paragraph>
                        <TextArea
                            value={test === 'MYSQL' ? user.sql_answers[number].answer : test === 'AWS' ? user.aws_answers[number].answer : user.python_answers[number].answer}
                            autoSize={{ minRows: 25, maxRows: 6 }}
                            disabled
                        />
                    </Layout>
                </Col>}
            </Row>
        </Layout>
    );
}

export default QuestionLayout;