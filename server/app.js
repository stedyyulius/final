require('dotenv').config();

const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 3000
let index = require('./routes/index');
let transaction = require('./routes/transaction')
let propertySell = require('./routes/propertySell')
let propertyRent = require('./routes/propertyRent')
let request = require('./routes/request')
let access = require('./routes/access')
let category = require('./routes/category')
let user = require('./routes/user')
let admin = require('./routes/admin')
let roomRent = require('./routes/roomRent')
let roomSell = require('./routes/roomSell')
let testimony = require('./routes/testimony')
let upload = require('./routes/upload')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(cors());

app.use('/', index);
app.use('/api/transaction', transaction);
app.use('/api/propertySell', propertySell);
app.use('/api/propertyRent', propertyRent);
app.use('/api/request', request);
app.use('/api/access', access);
app.use('/api/category', category);
app.use('/api/user', user);
app.use('/api/admin', admin);
app.use('/api/roomRent', roomRent);
app.use('/api/roomSell', roomSell);
app.use('/api/testimony', testimony);
app.use('/upload', upload);


let envi = 'test';
// let env = 'local_dev'
// let env = app.settings.env;
let db_config = {
  local_dev: 'mongodb://localhost/movie',
  development: 'mongodb://admin:admin@ds159112.mlab.com:59112/room360db',
  test: 'mongodb://admin:admin@ds159112.mlab.com:59112/room360dbtes'
}

mongoose.connect(db_config[envi],(err,res)=>{
  console.log(db_config[envi])
  console.log(err?err:'Berhasil connect ke db '+db_config[envi]);
})


app.set('port', port);
console.log('port : '+app.get('port'))
app.listen(app.get('port'), () => {
  console.log('magic happen at port:',app.get('port'))
})
module.exports = app;
