import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
 
 // replace and split if it's not an empty string
  if (req.body.departs) {
		// remove whitespace next to commas
    req.body.departs = req.body.departs
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights`)
  })
  .catch(err => {
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', { 
      title: 'Flight Detail', 
      flight: flight,
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


export {
  newFlight as new,
  index,
  create,
  show
}