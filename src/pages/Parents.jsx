import React from 'react';
import styles from '../styles/Parents.module.css';
import AuthHeader from '../components/AuthHeader/AuthHeader';
import { NavLink } from 'react-router-dom';

const ParentsPage = () => {
    return (
        <div>
            <AuthHeader />
            <div className={styles.container}>
                <div className={styles.title}>
                    <p className={styles.title__text}>РОДИТЕЛИ</p>
                </div>
                <div className={styles.container__inner}>
                    <p className={styles.inner__text}>Удалить родителя</p>
                </div>
                <div className={styles.container__input}>
                    <select id="selectID">
                        <option value="" disabled selected hidden class={styles.selecttitle}>Выберите родителя</option>
                        <option value="GR" className="name">Абрамова Маргарита Львовна</option>
                        <option value="YE" className="name">Курочкина Светлана Алексеевна</option>
                        <option value="BL" className="name">Иванова Наталья Сергеевна</option>
                        <option value="BL" className="name">Терешенко Екатерина Николаевна</option>
                    </select>
                    <button className={styles.deleteparent}>
                        <p>Удалить родителя</p>
                    </button>
                </div>
                <div className={styles.container__fix}>
                    <div className={styles.fix__title}>Закрепить ребенка за родителем</div>
                </div>
                <div className={styles.container__select}>
                    <select id="selectID">
                        <option value="" disabled selected hidden class={styles.selecttitle}>Выберите родителя</option>
                        <option value="GR" className="name">Абрамова Маргарита Львовна</option>
                        <option value="YE" className="name">Курочкина Светлана Алексеевна</option>
                        <option value="BL" className="name">Иванова Наталья Сергеевна</option>
                        <option value="BL" className="name">Терешенко Екатерина Николаевна</option>
                    </select>
                    <select id="selectID" className={styles.secondselect}>
                        <option value="" disabled selected hidden>Выберите ребенка</option>
                        <option value="GR" className="name">Абрамов Петр Иванович</option>
                        <option value="YE" className="name">Курочкин Владислав Игорьевич</option>
                        <option value="BL" className="name">Иванов Александр Степанович</option>
                    </select>
                </div>
                <div className={styles.fix}>
                    <button className={styles.fixbutton}>
                        Закрепить
                    </button>
                </div>
                <div className={styles.kidslist}>
                    <div className={styles.listtitle}>Список (Родитель : Ребенок)</div>
                    <div className={styles.list}>
                        <p className={styles.text}>Абрамова Маргарита Львовна : Абрамов Петр Иванович</p>
                        <p className={styles.text}>Курочкина Светлана Алексеевна : Курочкин Владислав Игорьевич</p>
                        <p className={styles.text}>Иванова Наталья Сергеевна : Иванов Александр Степанович</p>
                        <p className={styles.text}>Терешенко Екатерина Николаевна : ребенок не закреплен</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParentsPage;