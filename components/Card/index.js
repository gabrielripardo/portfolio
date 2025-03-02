import styles from './styles.module.scss'

export default function Card({ title, description, projectTechnologies, projectLinks, index }) {

    const applyBorder = () => {
        switch (index) {
          case 0:
            return styles.colorOrange;
          case 1:
            return styles.colorRed;
          case 2:
            return styles.colorBlue;
          case 3:
            return styles.colorGreen;
          case 4:
            return styles.colorOrange;
          case 5:
            return styles.colorRed;
          case 6:
            return styles.colorBlue;
          case 7:
            return styles.colorGreen;
          case 8:
            return styles.colorOrange;
          case 9:
            return styles.colorRed;
          case 10:
            return styles.colorBlue;
          case 11:
            return styles.colorGreen;
        }
    }

    return (
      <div className={styles.card + " " + applyBorder()}>
        <section className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.projectLinks}>
            {projectLinks.prototype !== "" && (
              <a
                className={styles.figma}
                title="Protótipo Figma"
                href={projectLinks.prototype}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons/figma.svg"
                  alt="linkedin logo"
                  width="16"
                  height="16"
                />
              </a>
            )}
            {projectLinks.repository !== "" && (
              <a
                className={styles.github}
                title="Repositório Github"
                href={projectLinks.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons/github.svg"
                  alt="linkedin logo"
                  width="20"
                  height="20"
                />
              </a>
            )}
          </div>
        </section>
        <p className={styles.description}>{description}</p>
        <div className="flex justify-between">
          <div className={styles.projectTechnologies}>
            {projectTechnologies.map((tech) => (
              <div className={styles.techonologieLogo} key={tech.name}>
                <img
                  src={"/assets/icons/technologies/" + tech.filename}
                  alt={tech.name}
                  title={tech.name}
                  width={tech.width}
                  height={tech.height}
                />
              </div>
            ))}
          </div>
          {projectLinks.deploy !== "" && (
            <a
              className={`${styles.deploy} underline`}
              title="Visualizar"
              href={projectLinks.deploy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          )}
        </div>
      </div>
    );
}