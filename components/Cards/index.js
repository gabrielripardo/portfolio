import { useState } from 'react'
import styles from './styles.module.scss'
import Card from '../Card'

export default function Cards({ list }) {
    return (
        <div className={styles.content}>
            {
                list.map(item => (
                    <Card key={item.title} title={item.title} description={item.description} url={item.url} />
                ))
            }
        </div>
    )
}