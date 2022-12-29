import argon from "argon2";
import jwt from "jsonwebtoken";
import AccountsModel from "utils/Db/Accounts.model";
import { validateEmail, validateName, validatePassword, validateRepeatEmail, validateRepeatPassword, validateSurname } from "utils/FormValidation";

const SECRET_TOKEN = "FDSFARSADDASDW";

const AccountsService = {
    async login(email, password) {
        const account = await AccountsModel.findOne({ email });

        if (account && argon.verify(account.password, password)) {
            const authUser = {
                name: account.name,
                surname: account.surname,
                email: account.email,
                jwtToken: jwt.sign({ id: account._id }, SECRET_TOKEN, { expiresIn: "30d" }),
                /* aloca un key unic pentru fiecare om,unde expira in 30 de zile de la nefolosire*/
            }

            return {
                status: "success",
                error: "",
                data: authUser,
            }
        }

        return {
            status: "error",
            error: "Problema la autentificare",
            data: ""
        }
    },
    async register({
        email,
        repeatEmail,
        password,
        repeatPassword,
        name,
        surname
    }) {
        const emailValidation = validateEmail(email);

        if (emailValidation !== null) {
            return {
                status: "error",
                error: emailValidation,
                data: ""
            }
        }

        const repeatEmailValidation = validateRepeatEmail(repeatEmail, email);

        if (repeatEmailValidation !== null) {
            return {
                status: "error",
                error: repeatEmailValidation,
                data: ""
            }
        }

        const passwordValidation = validatePassword(password);

        if (passwordValidation !== null) {
            return {
                status: "error",
                error: passwordValidation,
                data: ""
            }
        }

        const repeatPasswordValidation = validateRepeatPassword(repeatPassword, password);

        if (repeatPasswordValidation !== null) {
            return {
                status: "error",
                error: repeatPasswordValidation,
                data: ""
            }
        }

        const surnameValidation = validateSurname(surname);

        if (surnameValidation !== null) {
            return {
                status: "error",
                error: surnameValidation,
                data: ""
            }
        }

        const nameValidation = validateName(name);

        if (nameValidation !== null) {
            return {
                status: "error",
                error: nameValidation,
                data: ""
            }
        }

        const hashedPassword = await argon.hash(password);

        try {
            const account = await AccountsModel.create({
                email,
                password: hashedPassword,
                name,
                surname
            })

            return {
                status: "success",
                error: "",
                data: {
                    name,
                    surname,
                    email,
                    jwtToken: jwt.sign({ id: account._id }, SECRET_TOKEN, { expiresIn: "30d" }),
                }
            }
        } catch (e) {
            if (e.code === 11000) {
                return {
                    status: "error",
                    error: "Email-ul exista deja",
                    data: ""
                }
            }
        }
        return {
            status: "error",
            error: "Exista o problema cu crearea contului dumneavoastra,va rugam incercati din nou",
            data: ""
        }
    }
};

export default AccountsService;