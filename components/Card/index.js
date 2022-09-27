import styles from './styles.module.scss'

export default function Card({ title, description, url }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <a href={url}>Visualizar</a>
        </div>
    )
}