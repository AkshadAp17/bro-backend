import express from 'express'
import cros from 'cros'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cros({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"16kb"}))



export {app}