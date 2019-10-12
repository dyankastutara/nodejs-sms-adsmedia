require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const sms = require('./routes/sms');

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', sms);

app.listen(app.get('port'), () => {
  console.log('Application start to port : ', app.get('port'))
})
