import React, { useState } from 'react';
import styles from './main.module.scss';
import icons from './icons'
import Item from './Item';
import data from './data'

export default function Main() {
    const [activeOption, setActiveOption] = useState('tiles');

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.main__wrapper}>
                    <div className={styles.main__buttons}>
                        <div
                            className={styles.main__buttons__tiles}
                            onClick={() => setActiveOption('tiles')}
                        >
                            {[...Array(3)].map((_, rowIndex) => (
                                <div key={rowIndex} className={styles.row}>
                                    {[...Array(3)].map((_, colIndex) => (
                                        activeOption === 'tiles' ? <img key={colIndex} src={icons.square} alt="Square" /> : <img key={colIndex} src={icons.activeSquare} alt="Square" />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div
                            className={styles.main__buttons__rows}
                            onClick={() => setActiveOption('rows')}
                        >
                            {[...Array(3)].map((_, rowIndex) => (
                                <div key={rowIndex} className={styles.row}>
                                    {[...Array(2)].map((_, colIndex) => (
                                        colIndex % 2 === 0
                                            ? activeOption === 'rows' ? <img key={`${rowIndex}-${colIndex}`} src={icons.dash} alt="Dash" /> : <img key={`${rowIndex}-${colIndex}`} src={icons.activeDash} alt="Dash" />
                                            : activeOption === 'rows' ? <img key={`${rowIndex}-${colIndex}`} src={icons.square} alt="Square" /> : <img key={`${rowIndex}-${colIndex}`} src={icons.activeSquare} alt="Dash" />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.main__list} ${activeOption === 'rows' ? styles.rows : styles.tiles}`}>
                    {data && data.map((item) => (
                        <Item styles={styles} icons={icons} item={item} />
                    ))}
                    </div>

                    <div className={styles.main__load}>
                        <button><span>Load more</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
