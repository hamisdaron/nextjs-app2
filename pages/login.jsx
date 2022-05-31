import React, {useEffect, useState} from 'react';
import styles from './login.module.css';
import {useRouter} from 'next/router';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const onUserNameChange = (e) => setUserName(e.target.value.trim());
    const onPasswordChange = (e) => setPassword(e.target.value.trim());

    const onLogin = () => {
        console.log('un', userName);
        console.log('pass', password);
        localStorage.setItem("session", userName);
        router.push('/main');
    }

    useEffect(() => {
        if (localStorage.getItem("session", userName)) {
            router.push('/main');
        }
    }, []);

    return (
        <div className={
            styles.container
        }>
            <img src="https://picsum.photos/536/354"
                className={
                    styles.imageContainer
                }/>
            <div className={
                styles.inputFieldContainer
            }>
                <span>UserName:</span>
                <input onChange={onUserNameChange}/>
            </div>
            <div className={
                styles.inputFieldContainer
            }>
                <span>Password:</span>
                <input onChange={onPasswordChange}/>
            </div>
            <button onClick={onLogin}
                disabled={
                    !userName || !password
            }
            className={styles.buttonContainer}
            >Login</button>
        </div>
    )
}

export default Login
