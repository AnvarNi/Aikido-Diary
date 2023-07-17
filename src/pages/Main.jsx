import React from 'react';
import styles from '../styles/Main.module.css';
import NoAuthHeader from '../components/NoAuthHeader/NoAuthHeader';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <NoAuthHeader />
            <div className={styles.welcome}>
                <h1>Добро пожаловать в сервис «Дневник тренера»</h1>
                <h2>Здесь вы можете отслеживать задолжность по оплате</h2>
                <NavLink to="/login">
                    <button className={styles.login} onСlick="window.location.href = 'login_page.html';">Войти</button>
                </NavLink>
                <NavLink to="/register">
                    <button className={styles.register} onСlick="window.location.href = 'register_page.html';">Зарегистрироваться</button>
                </NavLink>
            </div>
        </div>
    )
}

export default MainPage;