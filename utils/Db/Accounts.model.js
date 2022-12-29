import { Schema } from "mongoose";
import db from "./Db";
/*"schema"defineste structura colectiei de pe site  */
const AccountsSchema = new Schema({
    email: {
        type: String,
        index: true,
        unique: true,
    },
    password: String,
    name: String,
    surname: String,
}, {
    collection: "accounts"
})
/* accountsmodel se ocupa strict sa comunice strict cu tabelul respectiv*/
const AccountsModel = db.model("Accounts", AccountsSchema);

export default AccountsModel;