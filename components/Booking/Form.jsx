import { useState, useEffect } from "react";
import styles from "styles/Register/Form.module.scss"
import useAuth from "hooks/useAuth";
/* Am instalat un package care se ocupa cu logica de selectare a datii rezervarii SelectDatePicker */
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function Form() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [equipment, setEquipment] = useState("pc");
    const [quantity, setQuantity] = useState("1");
    const [date, setDate] = useState(new Date());

    const [formError, setFormError] = useState();
    const [successMessage, setSuccessMessage] = useState();

    const { isLoggedIn, userData } = useAuth();

    const minDate = new Date();

    useEffect(() => {
        if (isLoggedIn) {
            setName(userData.name);
            setSurname(userData.surname);
            setEmail(userData.email);
        }
    }, [isLoggedIn, userData.name, userData.surname, userData.email]);

    const handleInputUpdate = (setter) => (e) => {
        setter(e.target.value);
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const request = await fetch("/api/bookings", {
            method: "POST",
            body: JSON.stringify({
                name,
                surname,
                email,
                equipment,
                quantity,
                date: date.toISOString()
            })
        });

        if (request.ok) {
            const response = await request.json();

            if (response.error) {
                setFormError(response.error);
            }

            if (response.status === 'success') {
                setFormError("");
                setSuccessMessage(`Rezervarea ${response.data._id} a fost creata cu success`);
            }
        }

    }

    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            {!!formError && (
                <span>
                    {formError}
                </span>
            )}
            {!!successMessage && (
                <span className='successMessage'>
                    {successMessage}
                </span>
            )}
            <label htmlFor="name">Prenume</label>
            <input type="text" name="name" id="name" value={name} onChange={handleInputUpdate(setName)} />

            <label htmlFor="surname">Nume</label>
            <input type="text" name="surname" id="surname" value={surname} onChange={handleInputUpdate(setSurname)} />

            <label htmlFor="email">Adresa de email</label>
            <input type="text" name='email' id='email' value={email} onChange={handleInputUpdate(setEmail)} />

            <label htmlFor="equipment">Ce doresti sa rezervi?</label>
            <select name="equipment" id="equipment" value={equipment} onChange={handleInputUpdate(setEquipment)}>
                <option value="pc">PC</option>
                <option value="xbox">Xbox</option>
                <option value="playstation">PlayStation</option>
            </select>

            <label htmlFor="quantity">Numar persoane</label>
            <select name="quantity" id="quantity" value={quantity} onChange={handleInputUpdate(setQuantity)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <label htmlFor="date">Data rezervarii</label>
            <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                minDate={minDate}
                closeOnScroll
                id='date'
                name='date'
            />

            <footer>
                <button type="submit">
                    Rezerva
                </button>

            </footer>
        </form>
    );
}