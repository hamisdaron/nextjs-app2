import { useRouter } from 'next/router';
import React from 'react';
import Product from '../components/Product';
import styles from './main.module.css';

function Main() {
    const router = useRouter();
    const onLogout = () => {
        localStorage.removeItem('session');
        router.push('/login');
    }

    return (
        <div className={
            styles.container
        }>
            <div><input placeholder='Search product..'/></div>
            <div className={styles.productsContainer}>
                {Array.from(Array(10).keys()).map((value) => (
                    <Product imgSrc={`https://picsum.photos/536/35${value}`} title={`Prod${value}`} desc={`so many descriptive words of the product ${value}`} price={`3${value}.23$`}/>
                ))}
                {/* <Product imgSrc="https://picsum.photos/536/354" title="Prod1" desc="so many descriptive words of the product" price="31.23$"/>
                <Product imgSrc="https://picsum.photos/536/354" title="Prod1" desc="so many descriptive words of the product" price="42.23$"/>
                <Product imgSrc="https://picsum.photos/536/354" title="Prod1" desc="so many descriptive words of the product" price="42.23$"/>
                <Product imgSrc="https://picsum.photos/536/354" title="Prod1" desc="so many descriptive words of the product" price="42.23$"/>
                <Product imgSrc="https://picsum.photos/536/354" title="Prod1" desc="so many descriptive words of the product" price="42.23$"/> */}
            </div>
            <div><button className={styles.logoutContainer} onClick={onLogout}>Logout</button></div>
        </div>
    )
}

export default Main
