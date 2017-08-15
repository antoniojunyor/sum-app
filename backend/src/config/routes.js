const express = require('express')

module.exports = function(server) {

	// API ROUTES
	const router = express.Router()
	server.use('/api', router)

	// SUM ROUTES
	const sumService = require('../api/sum/sumService')
	sumService.register(router, '/sums')
	
}