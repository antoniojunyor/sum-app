const restful = require('node-restful')
const mongoose = restful.mongoose

const sumSchema = new mongoose.Schema({
	sum: { type: Number, requered: true },
	createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Sum', sumSchema)