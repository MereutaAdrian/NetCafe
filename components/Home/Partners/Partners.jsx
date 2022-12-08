import Image from "next/image";
import styles from 'styles/Home/Partners.module.scss'

export default function Partners() {
    const partnersLogos = [
        'RTX.png',
        'legion.png',
        'logitech.png',
        'zowie_final.png',
        'dotro_telecom_logo1.png',
        'lenovo.png',
        'tp_link.png',
    ];

    return (
        <seciton className={styles.partners}>
            <h3>
                Sponsored by
            </h3>
            <div>
                {partnersLogos.map((partnerLogo) => (
                    <Image key={partnerLogo} src={`/partners/${partnerLogo}`} alt=
                        {partnerLogo} width={165} height={98} />
                ))}
            </div>
        </seciton>
    )
}