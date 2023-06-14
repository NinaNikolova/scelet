const express = require('express');
const app = express();



app.use(express.static('public'));
// parse body of forms and query strings
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res)=>{
    res.send(`<h1>Home page</h1>`)
})
app.listen('5000', ()=>console.log('Server is listening on port 5000...'))