import { React, useState, useEffect, useRef } from 'react';
import styles from '../styles/Payment.module.css'
import AuthHeader from '../components/AuthHeader/AuthHeader';
import AttendancePage from './Attendance';

const PaymentPage = () => {
    const [price, setPrice] = useState(250)

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const changePrice = () => {
        localStorage.setItem('price', price)
    }

    return (
        <div>
            <AuthHeader />
            <div className={styles.container}>
                <div className={styles.title}>
                    <p className={styles.title__text}>ОПЛАТА</p>
                </div>
                <div className={styles.container__inner}>
                    <p className={styles.inner__text}>Цена за занятие: {price} рублей</p>
                </div>
                <div className={styles.container__input}>
                    <input 
                        onChange={e => priceHandler(e)} 
                        className={styles.firstinput} 
                        type="number" 
                        placeholder="Новая цена" />
                    <button onClick={() => changePrice()} className={styles.deleteparent}>
                        <p>Применить</p>
                    </button>
                </div>
                <div className={styles.container__fix}>
                    <div className={styles.fix__title}>Изменить сумму долга
                    </div>
                </div>
                <div className={styles.container__select}>
                    <select id="selectID">
                        <option value="" disabled selected hidden className={styles.selecttitle}>Выберите родителя</option>
                        
                        <option value="GR" className="name">Абрамова Маргарита Львовна</option>
                        <option value="YE" className="name">Курочкина Светлана Алексеевна</option>
                        <option value="BL" className="name">Иванова Наталья Сергеевна</option>
                        <option value="BL" className="name">Терешенко Екатерина Николаевна</option>
                    </select>
                    <input className={styles.secondinput} type="text" placeholder="Внесенная родителем сумма" />
                </div>
                <div className={styles.change}>
                    <button className={styles.changebutton}>
                        Изменить
                    </button>
                </div>
                <div className={styles.kidslist}>
                    <div className={styles.listtitle}>Задолжность по оплате</div>
                    <div className={styles.list}>
                        <p className={styles.text}>Абрамова Маргарита Львовна : 750 рублей</p>
                        <p className={styles.text}>Курочкина Светлана Алексеевна : 0 рублей</p>
                        <p className={styles.text}>Иванова Наталья Сергеевна : 500 рублей</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentPage;