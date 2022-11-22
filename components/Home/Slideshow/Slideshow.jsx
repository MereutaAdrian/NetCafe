import Image from "next/image";
import { useState } from "react";
import styles from "styles/Home/Slideshow.module.scss";

export default function Slideshow() {

    const sliders = [
        "slide1.jpg",
        "slide2.jpg",
        "slide3.jpg",
        "slide4.jpg",
        "slide5.jpg",
    ];

    const [activeSlider, setActiveSlider] = useState(0); //tine minte ce slide e activ
    // `/Slideshow/${sliderImage}` <asta concateneaza numele fisierului cu folderul unde se afla imaginile
    const handleLeftArrowClick = () => {
        if (activeSlider === 0) { //am pus 3 === pentru a verifica si tipul valorii
            setActiveSlider(4);//daca suntem pe 0,ne intoarce la poza 4
        } else {
            setActiveSlider(activeSlider - 1)
        }
    };
    const handleRightArrowClick = () => {
        if (activeSlider === 4) {
            setActiveSlider(0);
        } else {
            setActiveSlider(activeSlider + 1)
        }
    }
    return (
        // ← →
        <section className={styles.slideshow}>
            <div onClick={handleLeftArrowClick}>←</div>
            {sliders.map((sliderImage, sliderIndex) => ( //functie din JS care parcurge elementele dintr un array(ala de sus) si le inlocuieste cu valoarea din return
                <Image key={sliderImage} src={`/Slideshow/${sliderImage}`}
                    alt="slider" width="1120" height="560" className={activeSlider ==
                        sliderIndex ? styles.active : ""} />
            ))}
            <div onClick={handleRightArrowClick}>→</div>
        </section>
    )
}