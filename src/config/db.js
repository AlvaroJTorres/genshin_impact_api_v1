import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const DB = await mongoose.connect(
      "mongodb://localhost:27017/genshin-impact-test"
    );
    console.log("Conexión de forma satisfactoria", DB.connection.name);
  } catch (e) {
    console.log(e);
  }
}
