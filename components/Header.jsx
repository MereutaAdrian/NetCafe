import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Logo />
                <NavBar />
            </div>
        </header>
    )
}