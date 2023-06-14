const router = require('express').Router();
const homeController = require('./controllers/homeController')
//add controller routes
// homeController is for main route "" and all static pages - home, about, 404
router.use(homeController)

module.exports = router;