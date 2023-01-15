import useAuth from "hooks/useAuth";
import Link from "next/link";

export default function NavBar() {

    const { isLoggedIn } = useAuth();

    return (
        <nav className="navbar">
            <Link href="/">
                Home
            </Link>
            <Link href="/#contact">
                Contact
            </Link>
            <Link href="/booking">
                Rezerva
            </Link>
            {!isLoggedIn && <Link href="/login">
                Autentificare
            </Link>}
            {!isLoggedIn && <Link href="/register">
                Inregistrare
            </Link>}
            {isLoggedIn && <Link href="/logout">
                Logout
            </Link>}
        </nav>
    )
}