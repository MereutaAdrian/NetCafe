import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href='/'>
            <Image src="/fine.jpg" alt="logo"
                height="65"
                width="125"

            />


        </Link>
    )


}