import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import { changeId } from '../../redux/action'
import styles from "./menu.module.css"
import { data } from './menuData'

const Menu = () => {
    const [active,setActive] = useState("")

    const {id} = useSelector(state => state)
    const dispatch = useDispatch()

    const {pathname} = useLocation()
    
    useEffect(() => {
        if(id > 9) {
            const path = pathname.slice(-(pathname.length), -3)
            setActive(path)
        }else if (id >= 1) {
            const path = pathname.slice(-(pathname.length),- 2)
            setActive(path)
        }else{
            setActive(pathname)
        }
    },[id,pathname])
    
  return (
    <div className={styles.menu}>
        <ul className={styles.menu_list}>
            {
                data.map((el,i) => (
                    <Link to={`${el.pathname}`} key = {i} onClick={() => dispatch(changeId(null))}>
                        <li 
                        className={`${styles.menu_item} ${active === el.pathname && styles.active}`} 
                        >
                            {el.icon}
                            <span 
                            className={`${styles.menu_text} ${active === el.pathname && styles.active}`}
                            >
                                {el.name}
                            </span>
                        </li>
                    </Link>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu