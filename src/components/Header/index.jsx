import React from 'react'
import styles from './header.module.scss'
import logo from '../../assets/images/logo.png'
import { DatePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";

export default function Header() {

    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <div className={styles.header__logo}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className={styles.header__info}>
                        <div className={styles.header__info__header}>
                            <p>monblanproject</p>
                            <button>
                                <span>Start on  17-02-2016</span>
                            </button>
                        </div>
                        <div className={styles.header__info__body}>
                            <ul>
                                <li>
                                    <p><span>870</span> posts</p>
                                </li>
                                <li>
                                    <p><span>11,787</span> followers</p>
                                </li>
                                <li>
                                    <p><span>112</span> following</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.header__info__footer}>
                            <p>Date</p>
                            <DatePicker format="MM-dd-yyyy" placeholder="from" className={styles.datePicker} block appearance="subtle" />
                            <DatePicker format="MM-dd-yyyy" placeholder="to" className={styles.datePicker} block appearance="subtle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
