import dynamic from "next/dynamic";
import Logo from "./Logo";

const NavBar = dynamic(() => import('components/NavBar'), {
    ssr: false
})

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