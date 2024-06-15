import React from 'react'

export default function Item({ styles, icons, item }) {
    return (
        <div key={item.id} className={styles.item}>
            <div className={styles.item__photo}>
                <img src={item.photo} alt={item.id} />
            </div>
            <div className={styles.item__data}>
                <div className={styles.item__data__status}>
                    <p>{item.photoStatus}</p>
                    <div className={styles.item__data__status__activity}>
                        <p>
                            <img src={icons.like} alt="Likes" />
                            <span>{item.photoLikes}</span>
                        </p>
                        <p>
                            <img src={icons.comment} alt="Comments" />
                            <span>{item.photoComments}</span>
                        </p>
                    </div>
                </div>
                <div className={styles.item__data__date}>
                    <p>{item.dateCenter}</p>
                    <div className={styles.item__data__date__activity}>
                        <p>
                            <img src={icons.like} alt="Likes" />
                            <span>{item.dateLikes}</span>
                        </p>
                        <p>
                            <img src={icons.comment} alt="Comments" />
                            <span>{item.dateComments}</span>
                        </p>
                    </div>
                </div>
                <div className={styles.item__data__upload}>
                    <p>Image upload</p>
                    <p>{item.dateRight}</p>
                </div>
            </div>
        </div>
    )
}
