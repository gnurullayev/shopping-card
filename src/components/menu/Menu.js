import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./menu.module.css"
import { data } from './menuData'

const Menu = () => {
    const {pathname} = useLocation()
    console.log(pathname);
  return (
    <div className={styles.menu}>
        <ul className={styles.menu_list}>
            {
                data.map((el,i) => (
                    <Link to={`${el.pathname}`} key = {i}>
                        <li className={`${styles.menu_item} ${pathname === el.pathname && styles.active}`} >
                            <img src={el.icon} alt="Icon" className={styles.menu_icon} />
                            <span className={`${styles.menu_text} ${pathname === el.pathname && styles.active}`}>{el.name}</span>
                        </li>
                    </Link>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu