import styles from "styles/Home/Products.module.scss"

export default function Products() {
    return (
        <section className={`${styles.products} container`}>
            <h1>
                Produse
            </h1>
            <div>
                <div>
                    <h3>
                        PC Nvidia
                    </h3>
                    <ul>
                        <li>
                            CPU: Intel Core I9 10900K
                        </li>
                        <li>
                            GPU: nVidia GeForce RTX 3080 Ti 12GB
                        </li>
                        <li>
                            RAM: Corsair Vengeance 32GB @ 4800 MHz
                        </li>
                        <li>
                            Stocare: Samsung 980 PRO
                        </li>
                        <li>
                            Monitor: Asus TUF 27inch 2K@240Hz
                        </li>
                        <li>
                            Keyboard: Logitech G915 TKL Wireless
                        </li>
                        <li>
                            Mouse: Logitech G PRO Superlight Wireless
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>
                        PC AMD
                    </h3>
                    <ul>
                        <li>
                            CPU: AMD Ryzen R7 5800X
                        </li>
                        <li>
                            GPU: AMD Radeon 6950 XT 16GB
                        </li>
                        <li>
                            RAM: Corsair Vengeance 32GB @ 4800 MHz
                        </li>
                        <li>
                            Stocare: Samsung 980 PRO
                        </li>
                        <li>
                            Monitor: Asus TUF 27inch 2K@240Hz
                        </li>
                        <li>
                            Keyboard: Logitech G915 TKL Wireless
                        </li>
                        <li>
                            Mouse: Logitech G PRO Superlight Wireless
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>
                        PS5
                    </h3>
                    <ul>
                        <li>
                            CPU: AMD Zen 2 3.5GHz
                        </li>
                        <li>
                            GPU: AMD RDNA2
                        </li>
                        <li>
                            RAM: 16GB GDDR6
                        </li>
                        <li>
                            Stocare: NVMe SSD 825GB
                        </li>
                        <li>
                            TV: Samsung QLED 50inch
                        </li>
                        <li>
                            Controller: PS DualSense Wireless
                        </li>
                        <li>
                            Headset: Sony Pulse 3D Wireless
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}