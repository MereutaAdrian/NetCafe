import Header from "components/Header"
import HomeImage from "components/Home/HomeImage"
import Partners from "components/Home/Partners"
import Products from "components/Home/Products"
import Location from "components/Location"
import Head from "next/head"




export default function Home() {
  return (
    <>
      <Head>
        <title>Hyde's Den</title>
      </Head>
      <Header />
      <HomeImage />
      <Products />
      <Partners />
      <Location />
    </>
  )
}
