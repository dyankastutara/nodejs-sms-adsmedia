'use strict';
require('dotenv').config();

const axios = require('axios');

module.exports = {
  sendSMS: async (req, res) => {
    axios.post(`${process.env.URL_ENDPOINT}/sms/api_sms_otp_send_json.php`,{
      "apikey":process.env.API_KEY,
      "callbackurl":"",
      "datapacket":[{"number":`${req.body.number}`,"message":`${req.body.message}`}]
    },{
      headers:{
        "Content-Type": "application/json",
      }
    })
    .then(response=>{
      res.send(response)
    })
    .catch(err=>{
      res.send(err);
    })
  }
}
