const Sum = require('./sum')

Sum.methods(['get', 'post', 'put', 'delete'])
Sum.updateOptions({ new: true, runValidators: true })

module.exports = Sum