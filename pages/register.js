import Header from "components/Header";
import dynamic from "next/dynamic";
import Head from "next/head";
const Form = dynamic(() => import("components/Register/Form"), {
    ssr: false,
})
export default function Register() {
    return (
        <>
            <Head>
                <title>Hyde's Den - Inregistrare</title>
            </Head>
            <Header />
            <Form />
        </>
    )
}