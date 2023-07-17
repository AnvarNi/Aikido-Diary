import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import NoAuthHeader from '../components/NoAuthHeader/NoAuthHeader';
import { NavLink } from 'react-router-dom';

const LoginPage = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (e) => {
        setLogin(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const buttonHandler = () => {
        localStorage.setItem('login', login)
    }

    return (
        <div>
            <NoAuthHeader />
            <form className={styles.login_form}>
                <h1>вход</h1>
                <h2>Введите логин</h2>
                <input 
                    onChange={e => loginHandler(e)} 
                    value={login} 
                    type="text" 
                    placeholder="Логин" 
                    required='required'
                />
                <h2>Введите пароль</h2>
                <input 
                    onChange={e => passwordHandler(e)} 
                    value={password} 
                    type="password" 
                    placeholder="Пароль" 
                    required='required'
                />
                <NavLink to="/kids">
                    <button onClick={buttonHandler} className={styles.login}>Войти</button>
                </NavLink>
            </form>
        </div>
    )
}

export default LoginPage;