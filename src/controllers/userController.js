const router = require('express').Router();
const userManager = require('../managers/userManager')

router.get('/login', (req, res)=>{
    res.render('users/login')
})
router.post('/login', async(req, res)=>{
    const {username, password} = req.body;
 
const token = await userManager.login(username, password);
res.redirect('/')


})
router.get('/register', (req, res)=>{
    res.render('users/register')
})
router.post('/register', async(req, res)=>{
    const {username, email, password, repass} = req.body;
    await userManager.register({username, email, password, repass})
    res.redirect('/')



})
router.get('/profile', (req, res)=>{
    res.render('users/profile')
})
router.get('/logout', (req, res)=>{
    res.redirect('/')
})
module.exports=router;