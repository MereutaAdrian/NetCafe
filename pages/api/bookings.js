import BookingsService from "utils/Db/Bookings.service";

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "POST": {
            const {
                name,
                surname,
                email,
                equipment,
                quantity,
                date
            } = JSON.parse(req.body);

            res.status(200).json(await BookingsService.createBooking({
                name,
                surname,
                email,
                equipment,
                quantity: parseInt(quantity ?? "1"),
                date
            }));
            break;
        }
        default: {
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} not allowed`);
        }
    }
}