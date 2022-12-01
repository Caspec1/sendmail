import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import sendRoute from './routes/sendRoute.js'

const app = express()

app.use(express.json())
dotenv.config()

const whitelist = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}

app.use(cors(corsOptions))

app.use('/send', sendRoute)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Running in port ${PORT}`)
})