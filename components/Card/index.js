import styles from './styles.module.scss'

export default function Card({ title, description, url, index }) {

    const applyBorder = () => {
        switch (index) {
            case 0: return styles.colorGreen;
            case 1: return styles.colorRed;
            case 2: return styles.colorBlue;
        }
    }

    return (
        <div className={styles.card + ' ' + applyBorder()}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <a href={url}>Visualizar</a>
        </div>
    )
}