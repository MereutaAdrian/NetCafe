import styles from "styles/Home/HomeImage.module.scss";
import Slideshow from "components/Home/Slideshow";

export default function HomeImage() {
    return (
        <section className={styles.homeImage}>
            <h1>
                Join us for the best LAN & Online Experience
            </h1>
            <Slideshow />
            <span>
                We have weekly competitions both LAN for gamers which viisit us at the netcafe but also only so your friends can join anywhere
                around the world,with prizes for everyone!
            </span>
        </section>
    )
}