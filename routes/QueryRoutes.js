const express = require('express');
const router = express.Router();
const {queryregister, getallquery} = require('../controllers/QueryController')


router.post('/createquery',queryregister);


router.get('/showquery',getallquery);


module.exports = router;
