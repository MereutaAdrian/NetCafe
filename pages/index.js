import Header from "components/Header"
import HomeImage from "components/Home/HomeImage"
import Partners from "components/Home/Partners"
import PopularGames from "components/Home/PopularGames/PopularGames"
import Products from "components/Home/Products"
import Location from "components/Location"
import Head from "next/head"




export default function Home() {
  return (
    <>
      <Head>
        <title>Hyde&apos;s Den</title>
      </Head>
      <Header />
      <HomeImage />
      <Products />
      <PopularGames />
      <Partners />
      <Location />
    </>
  )
}
