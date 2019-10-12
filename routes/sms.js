'use strict';

const express = require('express');
const router = express.Router()
const controllerSMS = require('../controllers/sms');

router.post('/', controllerSMS.sendSMS);
router.post('/check-balance', controllerSMS.checkBalance);

module.exports = router
