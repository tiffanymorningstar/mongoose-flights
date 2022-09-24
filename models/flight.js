import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const flightSchema = new Schema({
  airline: {type: String, default: ' '},
  flightNo: {type: Number, default: ' '},
  airport: {type: [String], default: ' '},
  departs: {type: Date, default: ' '},
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}