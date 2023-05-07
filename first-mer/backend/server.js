require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()
const port = process.env.PORT



app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body)
    next()
})

app.use('/api/workouts', workoutRoutes)




mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to mongo')
        
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
    .catch(err => console.log(err))






