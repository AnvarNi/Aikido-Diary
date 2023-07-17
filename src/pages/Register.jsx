import React from 'react';
import {useState} from 'react';
import styles from '../styles/Register.module.css';
import NoAuthHeader from '../components/NoAuthHeader/NoAuthHeader';

const RegisterPage = () => {
    const [form, setForm] = useState({
        name: '', email: '', password: ''
    })
    
    return (
        <div>
            <NoAuthHeader />
            <form className={styles.register_form}>
                <h1>регистрация</h1>
                <h2>Введите ваше ФИО</h2>
                <input 
                    type="text" 
                    placeholder="Иванова Елизавета Петровна"
                    name='name'
                />
                <h2>Придумайте логин</h2>
                <input 
                    type="text" 
                    placeholder="ivanova.el"
                    name='email'
                />
                <h2>Придумайте пароль</h2>
                <input 
                    type="password" 
                    placeholder="**********"
                    name='password'
                />
                <button className={styles.register}>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default RegisterPage;