import BookingsModel from "./Bookings.model";

const BookingsService = {
    async createBooking({ name, surname, email, equipment, quantity,
        date }) {
        try {
            const booking = await BookingsModel.create({ name, surname, email, equipment, quantity, date });

            return {
                status: "success",
                error: "",
                data: { _id: booking._id }
            }
        } catch (e) {
            return {
                status: "error",
                error: "Problema la crearea rezervarii,va rugam incercati mai tarziu",
                data: ""
            }
        }
    }
}

export default BookingsService;