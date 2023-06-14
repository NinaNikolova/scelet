const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController')
//add controller routes
// homeController is for main route "" and all static pages - home, about, 404
router.use(homeController)
router.use('/users', userController)

module.exports = router;