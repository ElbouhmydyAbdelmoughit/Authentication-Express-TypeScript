require('dotenv').config()
import express from "express"
import config from "config"
import ConnectToDb from "./utils/ConnectToDb"
import log from "./utils/logger"
import router from "./routes"

const app = express()

app.use(router)

const PORT = config.get("PORT")

app.listen(PORT,() =>{
  log.info(`App Running in http://localhost:${PORT}`)
  ConnectToDb()
})