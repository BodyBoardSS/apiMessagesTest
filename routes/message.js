const { Router } = require('express')
const {messagePost} = require('../controllers/message')
const router = Router()

//Code for insert --POST
router.post('/', messagePost)



module.exports = router