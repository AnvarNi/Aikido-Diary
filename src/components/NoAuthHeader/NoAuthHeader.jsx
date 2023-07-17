import logo from './../../img/logo.png';
import styles from './Style.module.css';
import { NavLink } from 'react-router-dom';

const NoAuthHeader = () => {
    return ( 
        <div className={styles.header}>
            <NavLink to="/">
                <a href="main_page.html"><img src={logo} alt="logo"/></a>
            </NavLink>
            <NavLink to="/">
                <button>Выйти</button>
            </NavLink>
        </div>
    );
}
 
export default NoAuthHeader;