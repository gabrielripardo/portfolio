import styles from './styles.module.scss'

export default function Card({ title, description, projectLinks, index }) {

    const applyBorder = () => {
        switch (index) {
            case 0: return styles.colorGreen;
            case 1: return styles.colorRed;
            case 2: return styles.colorBlue;
        }
    }

    return (
        <div className={styles.card + ' ' + applyBorder()}>            
            <section>
                <h3>{title}</h3>
                <div className={styles.projectLinks}>
                    {
                        projectLinks.prototype !== "" && (
                            <a className={styles.figma} title="Protótipo Figma" href={projectLinks.prototype} target="_blank" rel="noopener noreferrer">
                                <img src="/assets/icons/figma.svg" alt="linkedin logo" width="16" height="16" />
                            </a>
                        )
                    }
                    {
                        projectLinks.repository !== "" && (
                            <a className={styles.github} title="Repositório Github" href={projectLinks.repository} target="_blank" rel="noopener noreferrer">
                                <img src="/assets/icons/github.svg" alt="linkedin logo" width="20" height="20" />
                            </a>
                        )
                    }
                </div>
                <p className={styles.description}>{description}</p>
            </section>
            <a href={projectLinks.deploy} target="_blank" rel="noopener noreferrer">Visualizar</a>
        </div>
    )
}