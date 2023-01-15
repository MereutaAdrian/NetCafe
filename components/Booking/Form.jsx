import { useState, useEffect } from "react";
import styles from "styles/Register/Form.module.scss"
import useAuth from "hooks/useAuth";
/* Am instalat un package care se ocupa cu logica de selectare a datii rezervarii SelectDatePicker */
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Image from "next/image";

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
    }, [isLoggedIn, userData?.name, userData?.surname, userData?.email]);
    /* am pus ?  dupa userdata deoarece datele nu sunt acolo cand utilizatorul nu i logat */
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
            <fieldset id="equipment" className="radioWithImage">
                <label>
                    <input type="radio" value="pcn" name="equipment" onChange={handleInputUpdate(setEquipment)} checked={equipment === "pcn"} />
                    <div>
                        <Image alt="PC Nvidia" src="/products/Nvidia.jpg" fill />
                    </div>
                    <h3>
                        PC NVIDIA
                    </h3>
                </label>
                <label>
                    <input type="radio" value="pcamd" name="equipment" onChange={handleInputUpdate(setEquipment)} checked={equipment === "pcamd"} />
                    <div>
                        <Image alt="PC Amd" src="/products/Amd.jpg" fill />
                    </div>
                    <h3>
                        PC AMD
                    </h3>
                </label>
                <label>
                    <input type="radio" value="ps4" name="equipment" onChange={handleInputUpdate(setEquipment)} checked={equipment === "ps4"} />
                    <div>
                        <Image alt="PS 4" src="/products/PS4.jpg" fill />
                    </div>
                    <h3>
                        PS4
                    </h3>
                </label>
                <label>
                    <input type="radio" value="ps5" name="equipment" onChange={handleInputUpdate(setEquipment)} checked={equipment === "ps5"} />
                    <div>
                        <Image alt="PS 5" src="/products/PS5.jpg" fill />
                    </div>
                    <h3>
                        PS5
                    </h3>
                </label>

                <label>
                    <input type="radio" value="xbox" name="equipment" onChange={handleInputUpdate(setEquipment)} checked={equipment === "xbox"} />
                    <div>
                        <Image alt="Xbox" src="/products/Xbox.jpg" fill />
                    </div>
                    <h3>
                        Xbox
                    </h3>
                </label>
                <label>
                    <input type="radio" value="vr" name="equipment" onChange={handleInputUpdate(setEquipment)} checked={equipment === "vr"} />
                    <div>
                        <Image alt="VR" src="/products/VR.jpg" fill />
                    </div>
                    <h3>
                        VR
                    </h3>
                </label>
            </fieldset>

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