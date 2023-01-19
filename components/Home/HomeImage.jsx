import styles from "styles/Home/HomeImage.module.scss";
import Slideshow from "components/Home/Slideshow";

export default function HomeImage() {
    return (
        <section className={styles.homeImage}>
            <h1>
                Te asteptăm la noi pentru cea mai bună experiență LAN dar si Online
            </h1>
            <Slideshow />
            <span>
                Avem competiții săptămânale atât LAN pentru jucători care ne vizitează la netcafe, dar și Online unde te poti alatura cu prietenii tai din intreaga lume
                , cu premii pentru toată lumea!

            </span>
        </section>
    )
}