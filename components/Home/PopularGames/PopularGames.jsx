import Image from "next/image";
import styles from 'styles/Home/PopularGames.module.scss';

export default function PopularGames() {
    const games = ['csgo', 'overwatch', 'reddead', 'steam']

    return (
        <section className={`${styles.games} container`}>
            <h1>
                Cateva din sutele de jocuri pe care le puteti gasi la noi:
            </h1>
            <div>
                {games.map((game) => (
                    <div key={game}>
                        <div>
                            <Image alt={game} src={`/games/${game}.jpg`} fill />
                        </div>
                        <h3>{game}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}