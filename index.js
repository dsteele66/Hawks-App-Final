//imports 
require('dotenv').config({ path: 'ENV_FILENAME' });
const express = require('express')
const methodOverride = require('method-override')
//instialize express and configure 
const app = express()


  
const rosterController = require('./controllers/rosterController')





app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.set("port", process.env.PORT || 2000 )



app.use(rosterController)





app.listen(app.get("port"), () => {console.log(`listening on ${app.get("port")}`)})