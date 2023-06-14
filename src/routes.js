const router = require('express').Router();

//add controller routes
router.get('/', (req, res)=>{
    res.send(`<h1>Home page</h1>`)
})

module.exports = router;