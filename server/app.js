const path = require('path');
const express = require('express');
const app = express();

const models = require('./api/db');
const routes = require('./routes');
process.env.NODE_ENV = "production";
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const config = require('./environment');

if(process.env.NODE_ENV === "production"){
  app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
  })
}

app.get('/api/getUser', (req, res, next) => {
  var sql = 'select id, userName from user ORDER BY id';
  var params = req.body;
  console.log(params);
  models.query(sql, function(err, result) {
      if (err) {
          console.log(err);
      }
      if(typeof result === 'undefined') {
          res.json({
              state: false,
              message: '操作失败'
          });
      } else {
          res.json(result);
      }
  })


  // res.json({
  //     data: '后台返回结果 getUser OP'
  //   })
})


routes(app);

// 监听端口
// app.listen(config.port);
app.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
console.log('success listen at ip:'+config.ip+':'+ config.port + '......');

module.exports = app;
