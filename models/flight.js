import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
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
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}