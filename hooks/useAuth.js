/*functii folosite pentru a crea un state reutilizabil intre mai multe componente */


export default function useAuth() {
    let isLoggedIn = false;
    const userData = JSON.parse(localStorage?.getItem("userData") ?? null);

    if (userData) {
        isLoggedIn = true;
    }

    return {
        isLoggedIn,
        userData,
    }

}