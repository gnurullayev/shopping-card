import React from 'react'
import styles from "./stock.module.css"
import icon from "../../assets/acsia1.svg"
import icon2 from "../../assets/acsia2.svg"
import icon3 from "../../assets/acsia3.svg"
import icon4 from "../../assets/acsia4.svg"

const Stock = () => {
  return (
    <div className={styles.stock}>
        <h6 className={styles.stock_title}>Акции</h6>

        <ul className={styles.stck_list}>
            <li className={styles.stock_item}>
                <div className={styles.stock_item_left}>
                    <img className={styles.stock_item_icon} src={icon} alt=""  />

                    <div className="">
                        <p className={styles.stock_item_title}>Обменяй свой старый айфон и получи скидку на новый</p>

                        <p className={styles.stock_item_price}>400 000 сум</p>
                    </div>
                </div>

                <input className={styles.stock_item_input} type="checkbox" />
            </li>

            <li className={styles.stock_item}>

                <div className={styles.stock_item_left}>
                    <img className={styles.stock_item_icon} src={icon2} alt=""  />

                    <div className="">
                        <p className={styles.stock_item_title}>Наушники в подарок</p>

                        <p className={styles.stock_item_price}>Apple EarPods</p>
                    </div>
                </div>

                <input className={styles.stock_item_input} type="checkbox" />
            </li>

            <li className={styles.stock_item}>
                <div className={styles.stock_item_left}>
                    <img className={styles.stock_item_icon} src={icon3} alt=""  />

                    <div className="">
                        <p className={styles.stock_item_title}>Скидка 20% на смартфоны</p>

                        <p className={styles.stock_item_price}>- 10 000 сум</p>
                    </div>

                </div>

                <input className={styles.stock_item_input} type="checkbox" />
            </li>

            <li className={styles.stock_item}>
                <div className={styles.stock_item_left}>
                    <img className={styles.stock_item_icon} src={icon4} alt=""  />

                    <div className="">
                        <p className={styles.stock_item_title}>Скидка на айфоны</p>

                        <p className={styles.imel}>IMEI 012345678901234</p>

                        <p className={styles.stock_item_price}>10 000 сум</p>
                    </div>
                </div>

                <input className={styles.stock_item_input} type="checkbox"/>
            </li>
        </ul>

        <button type='button' className={styles.add_backet}>Добавить в корзину</button>
    </div>
  )
}

export default Stock