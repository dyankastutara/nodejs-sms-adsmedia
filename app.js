const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(app.get('port'), () => {
  console.log('Application start to port : ', app.get('port'))
})
