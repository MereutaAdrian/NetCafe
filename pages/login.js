import Header from "components/Header";
import dynamic from "next/dynamic";
import Head from "next/head";

const LForm = dynamic(() => import("components/Login/LForm"), {
    ssr: false,
    /* ssr=server side rendering*/
})


export default function Login() {
    return (
        <><Head>
            <title>Hyde's Den - Autentificare</title>
        </Head>
            <Header />
            <LForm />
        </>
    )
}