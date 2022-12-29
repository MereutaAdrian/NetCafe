import { useEffect, useState } from "react";
import { validateEmail, validatePassword, } from "../../utils/FormValidation";
import Link from "next/link";
import styles from "styles/Register/Form.module.scss";
import { useRouter } from "next/router";
import useAuth from "hooks/useAuth";

export default function LForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [formError, setFormError,] = useState();
    const router = useRouter();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/');
        }
    });

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

    const handleUpdatePassword = (e) => {
        setPassword(e.target.value);

    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const request = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
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
            <form className={styles.form} onSubmit={handleLoginSubmit}>
                {!!formError && (
                    <span>
                        {formError}
                    </span>
                )}
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

                <label htmlFor="password">Introduceti parola</label>
                <input type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleUpdatePassword}
                />

                <footer>
                    <button type="submit">
                        Autentificare
                    </button>
                    <Link href='/register'>Creaza un cont</Link>

                </footer>
            </form>
        </div>
    )
}