const express = require('express')
const ctrl = require('./contollers/messages-controller')
const app = express()
const port = 3000

app.use(express.json())

app.get('/api/messages', ctrl.create)
app.get('/api/messages/:id', ctrl.)


app.listen(port, () => console.log(`listening on port ${port}`))
