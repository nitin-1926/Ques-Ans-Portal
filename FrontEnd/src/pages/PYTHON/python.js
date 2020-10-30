import React from 'react';
import 'antd/dist/antd.css';
import QuestionLayout from '../../components/ProblemLayout/questionLayout';

const Python = () => {
    const questionsArray = [
        {
            number : 1,
            question : "Hello 1",
        } , 
        {
            number : 2,
            question: "Hello"
        } , 
        {
            number : 3,
            question : "Hello"
        }, 
        {
            number : 4,
            question : "Hello"
        }, 
        {
            number : 5,
            question : "Hello"
        }
    ];
    return (
        <QuestionLayout questions={questionsArray} test={'PYTHON'}/>
    );
}

export default Python;