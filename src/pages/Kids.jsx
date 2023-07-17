import {React, useState} from 'react';
import styles from '../styles/Kids.module.css';
import AuthHeader from '../components/AuthHeader/AuthHeader';
import { NavLink } from 'react-router-dom';
import data from '../mock-data.json';

const KidsPage = () => {
    const [students, setStudents] = useState(data);
    
    return (
        <div>
            <AuthHeader />
            <div className={styles.container}>
                <div className={styles.title}>
                    <p className={styles.title__text}>ДЕТИ</p>
                </div>
                <div className={styles.container__inner}>
                    <p className={styles.inner__text}>Добавить или удалить ребенка</p>
                </div>
                <div className={styles.container__input}>
                    <input className={styles.firstinput} type="text" placeholder="ФИО ребенка"/>   
                    <select id="selectID">
                        <option value="" disabled selected hidden>Выберите ребенка</option>
                        {students.map((student) => (
                            <option value="GR" className="name">{student.name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.container__buttons}>
                    <button className={styles.addkid}>
                        <div className={styles.textic}>
                            <p>Добавить ребенка</p>
                        </div>
                    </button>
                    <button className={styles.deletekid}>
                        <p>Удалить ребенка</p>
                    </button>
                </div>
                <div className={styles.kidslist}>
                    <div className={styles.listtitle}>Список детей</div>
                    {students.map((student) => (
                        <div className={styles.list}>
                            <p className={styles.text}>{student.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KidsPage;