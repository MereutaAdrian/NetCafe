export function validateEmail(inputValue) {
    /* adresa de email sa contina caracterele specifice*/
    /* i ul de la final de la linia 5 e pentru case sensitive*/
    /* /(\.+[a-zA-Z])+/  <  ,regex patern care cauta ca stringul sa contina domenii web,regex patern*/
    if (!inputValue || !inputValue.includes('@') || !/(\.+[a-z])+/i.test(inputValue)) {
        return "Introdu o adresa de e-mail valida"
    }
    return null;
}
export function validateRepeatEmail(inputValue, repeatInputValue) {
    const emailValidation = validateEmail(inputValue);

    if (emailValidation !== null) {
        return emailValidation;
    }
    if (inputValue !== repeatInputValue) {
        return "Cele doua adrese de email nu corespund,verificati din nou corectitudinea";
    }
    return null;
}
export function validatePassword(inputValue) {
    if (!inputValue || inputValue.length < 8) {
        return "Parola trebuie sa fie de 8 caractere sau mai mare"
    }
    if (!/(.*[0-9].*)/.test(inputValue) || !/(.*[A-Z].*)/.test(inputValue)) {
        return "Parola trebuie sa contina minim o litera mare si un numar"
    }
    return null;

}
export function validateRepeatPassword(inputValue, repeatInputValue) {
    const passwordValidation = validatePassword(inputValue);

    if (passwordValidation !== null) {
        return passwordValidation;
    }

    /*!== verifica ca si tipul variabilei sa fie aceleasi,nu doar ca valoarea sa fie egala */
    if (inputValue !== repeatInputValue) {
        return "Cele doua parole nu corespund";
    }
    return null;

}

export function validateName(inputValue) {
    if (!inputValue.length) {
        return "Trebuie sa introduceti un prenume"
    }
    return null;
}

export function validateSurname(inputValue) {
    if (!inputValue.length) {
        return "Trebuie sa introduceti un nume"
    }

    return null;
}