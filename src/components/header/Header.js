import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./header.module.css"

import logo from "../../assets/LOGO.svg"
import profilImg from "../../assets/profil.svg"
import Notification from "../../assets/Notification.svg"

const Header = () => {
  return (
    <header className={styles.header}>
       <div className="containers">
            <div className={styles.header_inner}>
                <Link to="/" className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </Link>

                <ul className={styles.nav_list}>
                    <li className={styles.nav_item1}> 
                        <span className={styles.notification}>
                            <img className={styles.notification_icon} src={Notification} alt="Notfication" />
                        </span>
                        <span className={styles.notification_count}>1</span>
                    </li>

                    <li className={styles.nav_item2}> 
                        <Link to={"/profile"} className={styles.nav_link}>
                            <span>Личный кабинет</span>
                            <img src={profilImg} alt="Личный кабинет<" />
                        </Link>
                    </li>
                </ul>
            </div>
       </div>
    </header>
  )
}

export default Header