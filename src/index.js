const express = require('express');
const app = express();
const routes = require('./routes')



app.use(express.static('public'));
// parse body of forms and query strings
app.use(express.urlencoded({extended: false}))


app.use(routes)
app.listen('5000', ()=>console.log('Server is listening on port 5000...'))