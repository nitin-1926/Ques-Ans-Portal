const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res,next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
            .then(users => {
                res.json({
                    message: "User Added Successfully",
                    data: users
                })
            })
            .catch(error => {
                res.json({
                    message: "An error occurred!"
                })
            });
    });
}

const login = (req,res,next) => {
    var emailId = req.body.email
    var password = req.body.password
    console.log(emailId);
    console.log(password);
    User.findOne({email:emailId})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {
                    res.json({
                        error : err
                    })
                }
                if (result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message : "successful",
                        token
                    })
                } else {
                    res.json({
                        message : "IncorrectPassword"
                    })
                }
            })
        } else {
            res.json({
                message : "No User found"
            })
        }
    })
}

const admin_login = (req,res,next) => {
    const emailId = req.body.email
    const password = req.body.password

    User.findOne({email:emailId})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {
                    res.json({
                        error : err
                    });
                }
                if (result){
                    if (user.userType === 'admin') {
                        let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                        res.json({
                            message: "successful",
                            token
                        });
                    } else {
                        res.json({
                            message : "You are not an admin!"
                        });
                    }
                } else {
                    res.json({
                        message : "IncorrectPassword"
                    });
                }
            });
        } else {
            res.json({
                message : "No User found"
            });
        }
    });
}

const submitAnswer = (req, res, next) => {
    const emailId = req.body.email;
    const test = req.body.test;
    const answer = req.body.answersArray;
    if ( test === 'MYSQL') {
        User.updateOne(
            {email: emailId},
            {$set: {sql_answers: answer}}
        ).then(user => {
            res.json({
                message : 'successful'
            });
        }).catch(err => {
            console.log(err);
            res.json({
                message : 'Unsuccessful'
            });
        })
    } else if(test === 'AWS') {
        User.updateOne(
            {email: emailId},
            {$set: {aws_answers: answer}}
        ).then(user => {
            res.json({
                message : 'successful'
            });
        }).catch(err => {
            console.log(err);
            res.json({
                message : 'Unsuccessful'
            });
        })
    } else if(test === 'PYTHON') {
        User.updateOne(
            {email: emailId},
            {$set: {python_answers: answer}}
        ).then(user => {
            res.json({
                message : 'successful'
            });
        }).catch(err => {
            console.log(err);
            res.json({
                message : 'Unsuccessful'
            });
        })
    }
    
}

const getAllUserData = (req, res) => {
    User.find({userType: 'Employee'}).then(users => {
        res.json({
            message: 'successful',
            data: users
        });
    }).catch(err => {
        console.log(err);
    })
}

module.exports = {
    register, login, admin_login, submitAnswer, getAllUserData
}