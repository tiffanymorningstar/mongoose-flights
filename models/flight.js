import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number, min: 0
  },
})


const flightSchema = new Schema({
  airline: {
    type: String,

    enum: ['Delta', 'TWA', 'Spirit']
  },
  flightNo: {
    type: Number, required: true
  },
  airport: {
    type: [String]
  },
  departs: {
    type: Date, required: true
  },
  tickets: [ticketSchema],
  meals: [{ type: Schema.Types.ObjectId, ref: 'Meal' }]
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}