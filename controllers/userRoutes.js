const router = require('express').Router();

const registration = require('./../models/registration.js')



router.get('/signup',(req,res) => {
    res.render('signup');
});

//router.post('/signup',(req,res) =>{
    
registration.insertOne(req.body.name_signup,req.body.email_signup,req.body.password_signup,function(data){
    res.redirect('/login');
});
     
router.get('/login', (req, res) => {  
    res.render('login');
});
  
module.exports = router;