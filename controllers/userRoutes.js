const router = require('express').Router();

const registration = require('./../models/registration.js')



router.get('/signup',(req,res) => {
    res.render('signup');
});

router.post('/signup',(req,res) =>{

    
registration.create({ 
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
}); 
    res.redirect('/login');
});
     
router.get('/login', (req, res) => {  
    res.render('login');
});
  
module.exports = router;