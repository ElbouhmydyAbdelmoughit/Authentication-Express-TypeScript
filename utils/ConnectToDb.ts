import config from "config";
import mongoose from "mongoose"
import log from "./logger";


const DB_CONNECT = config.get<string>("DB_CONNECT")

const ConnectToDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_CONNECT);
    log.info("Connected to DB");
  } catch (e) {
    process.exit(1)
  }
}

export default ConnectToDb