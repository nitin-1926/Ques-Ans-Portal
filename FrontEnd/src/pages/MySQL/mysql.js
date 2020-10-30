import React from 'react';
import 'antd/dist/antd.css';
import QuestionLayout from '../../components/ProblemLayout/questionLayout';

const MySQL = () => {
    const questionsArray = [
        {
            number : 1,
            question : "Write a query to get Product name and quantity/unit.",
        } , 
        {
            number : 2,
            question: "Write a query to get current Product list (Product ID and name)."
        } , 
        {
            number : 3,
            question : "Write a query to get discontinued Product list (Product ID and name)."
        }, 
        {
            number : 4,
            question : "Write a query to get most expense and least expensive Product list (name and unit price)."
        }, 
        {
            number : 5,
            question : "Write a query to get Product list (id, name, unit price) where current products cost less than $20."
        }
    ];
    return (
        <QuestionLayout questions={questionsArray} test={'MYSQL'}/>
    );
}

export default MySQL;