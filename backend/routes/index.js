var express = require('express');
var router = express.Router();
var userModel = require("../models/useModel")
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const secret = "secret";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signUp", async (req, res) => {
  console.log("Called")

  let { username, name, email, phone, password } = req.body;
  let emailCon = await userModel.findOne({ email: email });
  let phoneCon = await userModel.findOne({ phone: phone });
  if (emailCon) {
    return res.json({ success: false, message: "email already exist" })
  }
  else if (phoneCon) {
    return res.json({ success: false, message: "Phone number already exist" })
  }
  else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;
        let user = await userModel.create({
          username: username,
          name: name,
          email: email,
          phone: phone,
          password: hash
        })
        res.json({ success: true, message: "User created successfully", userId: user._id })
      });
    });
  };

});

router.post("/login", async (req, res) => {
  let {email,password} = req.body;
  let user = await userModel.findOne({email:email});
  if(user){
    bcrypt.compare(password, user.password, function(err, result) {
      if(result){
        var token = jwt.sign({ email: user.email, userId: user._id}, secret);
        res.json({success:true,message:"Login successful",userId:user._id,token: token})
      }
      else{
        res.json({success:false,message:"Invalid password"})
      }
    });
  }
  else{
    res.json({success:false,message:"Invalid email"})
  }
})




module.exports = router;
