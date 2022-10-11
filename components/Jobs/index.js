import { useState, useEffect } from 'react';
import styles from './styles.module.scss'

export default function Jobs({ list }) {
    const [job, setJob] = useState({});
    const listWorks = [...list].reverse();

    useEffect(() => {
        const firstElement = listWorks[0];
        handleJob(firstElement)
    }, [])

    const handleJob = (cur) => {        
        setJob(cur)
    }

    return (
        <div className={styles.container}>
            <div className={styles.options}>
                {listWorks.map((work) => (
                    <span
                        key={work.name}
                        className={styles.title + ' ' + `${job.name == work.name && styles.titleActive}`}
                        onClick={() => handleJob(work)}
                    >
                        {work.name}
                    </span>
                ))}
            </div>
            <div className={styles.details}>
                <div className={styles.header}>
                    <div className={styles.role}>{job.role}</div>
                    <div className={styles.period}>{job.period}</div>
                </div>
                <div className={styles.name}>{job.name}</div>
                <div className={styles.description}>{job.description}</div>
            </div>
        </div>
    )
}