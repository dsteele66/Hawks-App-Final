const express = require('express')
const router = express.Router()
const Roster = require('../models/roster-model')
const axios = require("axios").default;



//route to get the home page
router.get('/', (req, res) => {
    console.log("This is the Home Route for the Hawks")
    // res.render('home.hbs')
    res.render('home.hbs')
})

// index route to get the roster
router.get('/roster/', (req, res) => {
    Roster.find({})
    .then(roster => {
        res.render('index.hbs', {roster})
    })
    .catch(err => {
        console.log(err)
        res.send("Did not work")
    })
})


//this is the new route 
router.get('/roster/new', (req, res) => {
    // res.send("This is the new route")
    res.render("new")
})


//This is the create route 
router.post('/roster/', (req, res) => {
    console.log(`This is the create route. form data: ${req.body}`)
    console.log(req.body)
    // res.send('create route ')
    Roster.create(req.body)
        .then(result => {
            // res.send(`success: ${result}`)
            res.redirect('/roster')
        })
        .catch(err => {
            console.log(err)
            res.send("Did not work")
        })
})


// show route -details about an individual item 
router.get('/roster/:id', (req, res) => {
     const routeId = req.params.id
     Roster.findById(routeId)
        .then(roster => {
            //  res.send(`roster: ${roster}`)
            res.render('show', roster)
     })
     .catch(err => {
         console.log(`error during lookup of the player id: ${routeId}`, err)
         res.send(`Invalid ID`)
     })
})



//route to update 
router.get('/roster/:id/edit', (req, res) => {
    // console.log("on the edit route ")
    // res.render('edit')
    const routeId = req.params.id
    Roster.findById(routeId)
    .then(roster => {
        res.render('edit', roster)
    })
})

router.put('/roster/:id', (req, res) =>{
    // res.send("this is the put routre")
    const id = req.params.id
    Roster.findOneAndUpdate(
        {_id: id}, 
        {
            name: req.body.name,
            points: req.body.points,
            rebounds: req.body.rebounds,
            assists: req.body.assists
        },
        {new: true},
    )
    .then(roster => {
        res.render('show', roster)
    })
    .catch(err => {
        console.log(err)
    })
})

//route to delete 
// Delete: DELETE the player with a given id from the database
router.delete('/roster/:id', (req, res) => {
    const id = req.params.id;
    Roster.findOneAndRemove({ _id: id })
      .then(() => {
        res.redirect('/roster');
      })
      .catch(err => {
        console.log(err)
    })
  });



module.exports = router