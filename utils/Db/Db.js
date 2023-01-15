import mongoose from "mongoose";

/* pentru a ma conecta la baza de date din mongodb (mongoose)*/
const db = mongoose.createConnection(process.env.DATABASE_URI)

export default db;
