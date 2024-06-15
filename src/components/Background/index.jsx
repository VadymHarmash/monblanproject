import React from 'react'
import styles from './background.module.scss'
import decoreTop from '../../assets/images/decore-top.png'
import decoreBottom from '../../assets/images/decore-bottom.png'

export default function Background() {
    return (
        <div className={styles.background}>
            <img className={styles.decoreTop} src={decoreTop} alt="DecoreTop" />
            <img className={styles.decoreBottom} src={decoreBottom} alt="DecoreBottom" />
        </div>
    )
}
