import styles from './styles.module.scss'

export default function Card({ title, description, projectTechnologies, projectLinks, index }) {

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
                        projectLinks.deploy !== "" && (
                            <a className={styles.deploy} title="Visualizar" href={projectLinks.deploy} target="_blank" rel="noopener noreferrer">
                                <img src="/assets/icons/view-icon.svg" alt="view logo" width="22" height="22" />
                            </a>                            
                        )
                    }
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
            <div className={styles.projectTechnologies}>                    
                {
                    projectTechnologies.map(tech => (
                        <div className={styles.techonologieLogo} key={tech.name}>
                            <img src={"/assets/icons/technologies/"+tech.filename} alt={tech.name} width={tech.width} height={tech.height} />
                        </div>
                    ))
                }
            </div>            
        </div>
    )
}