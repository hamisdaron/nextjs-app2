import React from 'react';
import styles from './Product.module.css';

function Product({imgSrc, title, desc, price}) {
    return (
        <div className={
            styles.container
        }>
            <img src={imgSrc}
                className={
                    styles.imgContainer
                }/>
            <div className={
                styles.infoContainer
            }>
                <div className={styles.titleContainer}>{title}</div>
                <div className={
                    styles.descContainer
                }>
                    {desc} </div>
            </div>
            <div className={
                styles.priceContainer
            }>
                {price}</div>
        </div>
    )
}

export default Product
