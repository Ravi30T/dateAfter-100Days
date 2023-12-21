const express = require('express')

const addDays = require('date-fns/addDays')

const application = express()

application.get('/', (request, response) => {
  let dateAfter100Days = addDays(new Date(), 100)
  response.send(
    `${dateAfter100Days.getDate()}/${dateAfter100Days.getMonth()}/${dateAfter100Days.getFullYear()}`,
  )
})

application.listen(3000)

module.exports = application
