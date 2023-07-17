import React, { useState, useEffect, useRef } from 'react';
import data from '../mock-data.json';
import {nanoid} from 'nanoid';
import AuthHeader from '../components/AuthHeader/AuthHeader';
import styles from '../styles/Attendance.module.css'

const AttendancePage = () => {
    const [students, setStudents] = useState(data);
    const [addFormData, setAddFormData] = useState({
      name: '',
      debt: 0
    })
    const currentPrice = Number(localStorage.getItem('price'))

    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = {...addFormData};
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);
      console.log(newFormData);
    }

    const handleAddFormSubmit = (event) => {
      event.preventDefault();

      const newStudent = {
        id: students.length,
        name : addFormData.name,
        debt: addFormData.debt
      }

      const newStudents = [...students, newStudent];
      setStudents(newStudents);
      console.log(newStudents);
    }

    const debtIncrease = (id) => {
      let newCache = [...students];
      console.log(newCache);
      console.log(newCache[id]);
      newCache[id].debt = students[id].debt + currentPrice;
      setStudents(newCache);
    }

    const handleDeleteClick = (id) => {
      const newStudents = [...students];
      const index = students.findIndex((student) => student.id === id);
      newStudents.splice(index, 1);
      setStudents(newStudents);
      console.log(newStudents);
    }

    return (
        <div>
          <AuthHeader/>
          <div className={styles.attendance}>
            <h1>посещаемость</h1>
            <div className={styles.month_choise}>
              <select>
                <option value="январь">Январь</option>
                <option value="февраль">Февраль</option>
                <option value="март">Март</option>
                <option value="апрель">Апрель</option>
                <option value="май">Май</option>
                <option value="июнь">Июнь</option>
                <option value="июль">Июль</option>
                <option value="август">Август</option>
                <option value="сентябрь">Сентябрь</option>
                <option value="октябрь">Октябрь</option>
                <option value="ноябрь">Ноябрь</option>
                <option value="декабрь">Декабрь</option>
              </select>
              < button className={styles.register}>Выбрать</button>
            </div>
            <table frame>
              <thead>
                <tr>
                  <th>ФИО ребенка:</th>
                  <th>01</th>
                  <th>03</th>
                  <th>05</th>
                  <th>08</th>
                  <th>10</th>
                  <th>12</th>
                  <th>15</th>
                  <th>17</th>
                  <th>19</th>
                  <th>22</th>
                  <th>24</th>
                  <th>26</th>
                  <th>29</th>
                  <th>31</th>
                  <th>Долг ₽</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td><input className={styles.checkboxes} type="checkbox" onClick={() => {debtIncrease(student.id)}}/></td>
                  <td>{student.debt}</td>
                  <td><button onClick={handleDeleteClick}>Удалить</button></td>
                </tr>
              ))}
              </tbody>
            </table>
            <form onSubmit={handleAddFormSubmit}>
              <div>Добавить ученика</div>
              <input 
                className={styles.add}
                type="text" 
                name="name" 
                required="required" 
                placeholder='Введите имя'
                onChange={handleAddFormChange}
              />
              <br></br>
              <button className={styles.addbutton} type="submit">+</button>
            </form>
          </div>
        </div>
    )
}

export default AttendancePage;