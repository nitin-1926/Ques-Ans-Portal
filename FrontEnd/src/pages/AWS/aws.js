import React from 'react';
import 'antd/dist/antd.css';
import QuestionLayout from '../../components/ProblemLayout/questionLayout';

const AWS = () => {
    const questionsArray = [
        {
            number : 1,
            question : "AWS",
        } , 
        {
            number : 2,
            question: "AWS"
        } , 
        {
            number : 3,
            question : "AWS"
        }, 
        {
            number : 4,
            question : "AWS"
        }, 
        {
            number : 5,
            question : "AWS"
        }
    ];
    return (
        <QuestionLayout questions={questionsArray} test={'AWS'}/>
    );
}

export default AWS;