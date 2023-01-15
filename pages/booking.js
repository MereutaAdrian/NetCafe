
import Header from "components/Header"
import dynamic from "next/dynamic";
import Head from "next/head";
/* ssr=server side rendering ( sa nu ruleze componenta pe server,ci doar in browser)*/
const Form = dynamic(() => import("components/Booking/Form"), {
    ssr: false
})

export default function Booking() {
    return (
        <>
            <Head>
                <title>Hyde's Den - Rezervari</title>
            </Head>
            <Header />
            <Form />


        </>
    )
}