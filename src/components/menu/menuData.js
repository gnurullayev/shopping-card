import {HiOutlineHome} from "react-icons/hi"
import {BiShoppingBag} from "react-icons/bi"
import {CgFileDocument} from "react-icons/cg"
import {FiStar} from "react-icons/fi"
import {SlBasket} from "react-icons/sl"

import styles from "./menu.module.css"

export const data = [
    {
        icon:<HiOutlineHome className={styles.menu_icon}/>,
        name:"Главная",
        pathname:"/"
    },
    {
        icon:<CgFileDocument className={styles.menu_icon}/>,
        name:"Заказы",
        pathname:"/orders"
    },
    {
        icon:<BiShoppingBag className={styles.menu_icon}/>,
        name:"Товары",
        pathname:"/products"
    },
    {
        icon:<FiStar className={styles.menu_icon}/>,
        name:"Отзывы",
        pathname:"/reviews"
    },

    {
        icon:<SlBasket className={styles.menu_icon}/>,
        name:"Оформить заказ",
        pathname:"/checkout"
    },
]