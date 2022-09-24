import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const flightSchema = new Schema({
  airline: String,
  flightNo: Number,
  airport: [String],
  departs: Date,
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}