const seedData = require('./roster.seeds.json')
const Roster = require('../models/roster-model')

Roster.deleteMany({})
.then( () => {
    //insert the date and return it 
    //so we can log it in the next .then 
    return Roster.insertMany(seedData)
})
//if the input is successfull we see results in terminal 
.then(console.log)
//logt the error if input doesnt work
.catch(console.error)
//wheite it was success or not we need to exit the database 
.finally(() => {
    //close connection to Mongo 
    process.exit()})