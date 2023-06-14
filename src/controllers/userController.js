const router = require('express').Router();

router.get('/login', (req, res)=>{
    res.render('users/login')
})
router.get('/register', (req, res)=>{
    res.render('users/register')
})
router.get('/profile', (req, res)=>{
    res.render('users/profile')
})
router.get('/logout', (req, res)=>{
    res.redirect('/')
})
module.exports=router;