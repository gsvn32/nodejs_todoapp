var express = require('express')
var todocon = require('./controller/todocon')
var app = express()

//static files
app.use('/assets',express.static(__dirname))
//templete engine

app.set('view engine','ejs')

//port
app.listen(3000)
console.log('listening on 3000 ........')

todocon(app)
