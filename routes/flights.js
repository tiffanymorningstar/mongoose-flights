import { Router } from 'express'

import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET users listing. */
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)

// POST /movies/:id/reviews
router.post('/:id/tickets', flightsCtrl.createTicket)

router.post('/:id/meals', flightsCtrl.addToMenu)

router.get('/:id', flightsCtrl.show)
// localhost:3000/movies/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

router.delete('/:id', flightsCtrl.delete)

// localhost:3000/movies/:id
router.put("/:id", flightsCtrl.update)

router.post('/:id/tickets', flightsCtrl.createTicket)


export {
  router
}
