import { Schema } from "mongoose";
import db from "./Db";
const BookingsSchema = new Schema({
    name: String,
    surname: String,
    email: {
        type: String,
        index: true,
    },

    equipment: String,
    quantity: Number,
    date: Date,
}, {
    collection: "bookings"
})

const BookingsModel = db.model("Bookings", BookingsSchema);

export default BookingsModel;