import mongoose from "mongoose";

/* pentru a ma conecta la baza de date din mongodb (mongoose)*/
const db = mongoose.createConnection("mongodb+srv://admin:QKy9B86gjFfrWUek@cluster0.l9yewdi.mongodb.net/internetcaffe?retryWrites=true&w=majority")

export default db;
