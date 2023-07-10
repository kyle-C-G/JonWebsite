import styles from "./card.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Card(props) {
    let linkElement = <div></div>
    if (props.url != false) {
        linkElement = <Link href={`${props.url}`}>View Details</Link>
    }

    return (
        <article className={styles.contentWrapper}>
            <div className={styles.content}>
                <Image 
                    src={`${props.image}`}
                    height={500}
                    width={500}
                    alt={props.alt}
                />  
                <div className={styles.contentText}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    {linkElement}
                </div>
            </div>
        </article>
    )
}