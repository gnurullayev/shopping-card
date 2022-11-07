import home from "../../assets/Home.svg"
import bag from "../../assets/Bag.svg"
import document from "../../assets/Document.svg"
import star from "../../assets/Star.svg"
import buy from "../../assets/Buy.svg"

export const data = [
    {
        icon:home,
        name:"Главная",
        pathname:"/"
    },
    {
        icon:document,
        name:"Заказы",
        pathname:"/orders"
    },
    {
        icon:bag,
        name:"Товары",
        pathname:"/products"
    },
    {
        icon:star,
        name:"Отзывы",
        pathname:"/reviews"
    },

    {
        icon:buy,
        name:"Оформить заказ",
        pathname:"/checkout"
    },
]