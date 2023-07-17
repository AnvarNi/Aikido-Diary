import logo from './../../img/logo.png';
import styles from'./Style.module.css';
import { NavLink } from 'react-router-dom';

const AuthHeader = () => {
    const userLogin = localStorage.getItem('login')

    const buttonHandler = () => {
        localStorage.clear()
    }

    return ( 
        <div>
            <div className={styles.shell}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>
                        <NavLink to="/">
                            <a href="main_page.html"><img src={logo} alt="logo"/></a>
                        </NavLink>
                    </div>
                    <div className={styles.header__menu}>
                        <nav>
                            <NavLink to="/kids">
                                <a className={styles.ssilka} href="../html/menu_kids.html">ДЕТИ</a>
                            </NavLink>
                            <NavLink to="/parents">
                                <a className={styles.ssilka} href="../html/menu_parents.html">РОДИТЕЛИ</a>
                            </NavLink>
                            <NavLink to="/attendance">
                                <a className={styles.ssilka} href="#">ПОСЕЩАЕМОСТЬ</a>
                            </NavLink>    
                            <NavLink to="/payment">
                                <a className={styles.ssilka} href="#">ОПЛАТА</a>
                            </NavLink>       
                        </nav>
                    </div>
                    <p>{userLogin}</p>
                    <div className={styles.logout}>
                        <NavLink to="/">
                            <button onClick={buttonHandler} className={styles.logout}>ВЫЙТИ</button>
                        </NavLink> 
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}
 
export default AuthHeader;