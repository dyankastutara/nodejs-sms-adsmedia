'use strict';

const express = require('express');
const router = express.Router()
const controllerSMS = require('../controllers/sms');

router.post('/', controllerSMS.sendSMS);

module.exports = router
