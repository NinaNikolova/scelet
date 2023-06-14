const router = require('express').Router();

//add controller routes
router.get('/', (req, res)=>{
    res.render('home')
})

module.exports = router;