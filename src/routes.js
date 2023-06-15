const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController')
//add controller routes
// homeController is for main route "" and all static pages - home, about, 404
router.use(homeController);
router.use('/users', userController);


router.use('*', (req, res)=>{
    res.redirect('/404')
})

module.exports = router;