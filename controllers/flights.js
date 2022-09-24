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
   // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing

  // replace and split if it's not an empty string
  if (req.body.departs) {
		// remove whitespace next to commas
    req.body.departs = req.body.departs.split(', ')
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights/new`)
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}


export {
  newFlight as new,
  index,
  create
}