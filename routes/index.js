const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const userDetails = require('../controller/userDetails')
const logout = require('../controller/logout')
const updateUserDetails = require('../controller/updateUserDetails')
const SearchUser = require('../controller/searchUser')

const router = express.Router()

//create user api
router.post('/register',registerUser)

//check user email
router.post('/email',checkEmail)

//check user password
router.post('/password',checkPassword)

//lodin user details
router.get('/user-details',userDetails)

//logout user
router.get('/logout',logout)

//update user details
router.post('/update-user',updateUserDetails)

//Search user
router.post("/search-user",SearchUser)

module.exports = router
