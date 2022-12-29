import Header from "components/Header";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("components/Register/Form"), {
    ssr: false,
})
export default function Register() {
    return (
        <>
            <Header />
            <Form />
        </>
    )
}