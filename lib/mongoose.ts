import mongoose from "mongoose";

let isConnected = false; //variable to check if mongoose is connected

export const connnectDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) return console.log("MONGO_URL not found ! ");
  if (isConnected) return console.log("Already connected to MongoDB !");

  try {
    await mongoose.connect(process.env.MONGO_URL);

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
