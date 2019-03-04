

//登入
exports.doLogin = function(req,res){

  console.log('doLogin----->',req.query);

  return res.status(200).send({success: true, data: req.query});
};