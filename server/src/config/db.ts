import mongoose from "mongoose";
import logger from "./logger";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_STRING!);
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    logger.error(`Error: ${error.message as string}`);
    process.exit(1);
  }
};

export default connectDB;
