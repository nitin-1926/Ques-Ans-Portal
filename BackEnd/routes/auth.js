const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/admin_login', AuthController.admin_login)
router.post('/submitAnswer', AuthController.submitAnswer)
router.get('/getAllUserData', AuthController.getAllUserData);

module.exports = router