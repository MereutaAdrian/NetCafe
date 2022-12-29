import { useState, useEffect } from "react";
import {
    validateEmail, validatePassword, validateRepeatEmail, validateRepeatPassword,
    validateName, validateSurname
} from "../../utils/FormValidation";
import Link from "next/link";
import styles from "styles/Register/Form.module.scss";
import { useRouter } from "next/router";
import useAuth from "hooks/useAuth";


export default function Form() {
    const [email, setEmail] = useState("");
    const [repeatEmail, setRepeatEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const [formError, setFormError] = useState();

    const router = useRouter();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/');
        }
    });


    /* functia asta returneaza o funcite care o sa fie folositia pt adapta in parte
     state ul fiecarei variabile definite pentru fiecare input*/
    const handleUpdateInput = ({
        setState,
        setErrorState,
        validator,
        validatorRepeatValue = null
    }) => (e) => {
        const valueValidation = validator(e.target.value, validatorRepeatValue);

        setErrorState(valueValidation);
        setState(e.target.value);

    }
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        const request = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({

                email,
                repeatEmail,
                password,
                repeatPassword,
                name,
                surname,
            })

        });
        if (request.ok) {
            const response = await request.json();

            if (response.error) {
                setFormError(response.error);

            }

            localStorage.setItem("userData", JSON.stringify(response.data));

            router.push("/");
        }

    }
    return (
        <div className="container">
            <form className={styles.form} onSubmit={handleRegisterSubmit}>
                {!!formError && (
                    <span>
                        {formError}
                    </span>
                )}
                <label htmlFor="surname">Introduceti numele de familie:</label>
                <input type="text"
                    name="surname"
                    id="surname"
                    value={surname}
                    onChange={handleUpdateInput({
                        setState: setSurname,
                        setErrorState: setFormError,
                        validator: validateSurname,
                    })}
                />

                <label htmlFor="name">Introduceti prenumele:</label>
                <input type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleUpdateInput({
                        setState: setName,
                        setErrorState: setFormError,
                        validator: validateName,
                    })}
                />


                <label htmlFor="email">Adresa de email</label>
                <input type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleUpdateInput({
                        setState: setEmail,
                        setErrorState: setFormError,
                        validator: validateEmail
                    })}
                />

                <label htmlFor="repeat_email">Repetati adresa de email</label>
                <input type="text"
                    name="repeat_email"
                    id="repeat_email"
                    value={repeatEmail}
                    onChange={handleUpdateInput({
                        setState: setRepeatEmail,
                        setErrorState: setFormError,
                        validator: validateRepeatEmail,
                        validatorRepeatValue: email
                    })}
                />

                <label htmlFor="password">Introduceti parola</label>
                <input type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleUpdateInput({
                        setState: setPassword,
                        setErrorState: setFormError,
                        validator: validatePassword
                    })}
                />

                <label htmlFor="repeat_password">Repetati parola introdusa mai sus</label>
                <input type="password"
                    name="repeat_password"
                    id="repeat_password"
                    value={repeatPassword}
                    onChange={handleUpdateInput({
                        setState: setRepeatPassword,
                        setErrorState: setFormError,
                        validator: validateRepeatPassword,
                        validatorRepeatValue: password,
                    })}

                />

                <footer>
                    <button type="submit">
                        Inregistreaza-te
                    </button>
                    <Link href="/login">Spre pagina de autentificare</Link>
                </footer>
            </form>
        </div>

    )
}