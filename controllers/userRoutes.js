const router = require('express').Router();

router.get('/signup',(req,res) => {
    res.render('signup');
});

router.post('/signup',(req,res) =>{
    
});
  
router.get('/login', (req, res) => {

    
  
    res.render('login');
  });
  
  module.exports = router;