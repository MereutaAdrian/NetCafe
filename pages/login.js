import Header from "components/Header";
import dynamic from "next/dynamic";

const LForm = dynamic(() => import("components/Login/LForm"), {
    ssr: false,
    /* ssr=server side rendering*/
})


export default function Login() {
    return (
        <>
            <Header />
            <LForm />
        </>
    )
}