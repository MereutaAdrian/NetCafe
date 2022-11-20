import Link from "next/link";
export default function NavBar() {
    return (
        <nav className="navbar">
            <Link href="#">
                Home
            </Link>
            <Link href="#">
                Link1
            </Link>
            <Link href="#">
                Link2
            </Link>
            <Link href="#">
                Link3
            </Link>


        </nav>
    )
}