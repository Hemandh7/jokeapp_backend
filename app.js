const express = require('express')
const { generateJoke, generateImage } = require('./controllers/openaiController')
const cors = require('cors');

// app setup
const app = express()
app.listen(4000, () => console.log('listening to requests on port 4000'))

// middleware
app.use(express.json())
app.use(cors());

// routes
app.post('/generate/joke', generateJoke)
app.post('/generate/image', generateImage)