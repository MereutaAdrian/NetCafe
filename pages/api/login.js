
import AccountsService from "utils/Db/Accounts.service";

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "POST": {
            const { email, password } = JSON.parse(req.body);

            res.status(200).json(await AccountsService.login(email, password));
            break;
        }
        default: {
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} not allowed`);
        }
    }
}