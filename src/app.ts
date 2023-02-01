require('dotenv').config()
import express from "express"
import config from "config"
import ConnectToDb from "../utils/ConnectToDB"

const app = express()

const PORT = config.get("PORT")

app.listen(PORT,() =>{
  console.log(`App Running in http://localhost:${PORT}`);
  ConnectToDb()
})