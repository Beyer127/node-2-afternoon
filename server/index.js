const express = require('express')
const ctrl = require('./controller')
const app = express()
const port = 3000

app.use(express.json())


app.listen(port, () => console.log(`listening on port ${port}`))
