import React, { useEffect, useState } from 'react'
import BreadCrumb from '../breadcrumb/BreadCrumb'
import styles from "./goodsDatails.module.css"

import icon from "../../assets/acsia1.svg"
import icon2 from "../../assets/acsia2.svg"
import icon3 from "../../assets/acsia3.svg"
import icon4 from "../../assets/acsia4.svg"
import arrow from "../../assets/arrow-more-icon.svg"
import backet from "../../assets/icon-корзина.svg"

import Stock from '../stock/Stock'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { changeId } from '../../redux/action'

const GoodsDetalis = () => {
  const[item,setItem] = useState({})
  const {goods} = useSelector(state => state)
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    const newItem = goods.find(el => el.id + "" === id)
    setItem(newItem)
    dispatch(changeId(id))
  },[id,goods])

  return (
    <div className={styles.goods_datails}>
      <BreadCrumb name = {item.name}/>
      <div className={styles.datails_inner}>
        <h2 className={styles.datails_title}>{item.name}</h2>

        <div className={styles.datails_card}>
          <div className={styles.card_left}>
            <img src={item.poster} alt="" className={styles.card_img} />
            
            <ul className={styles.card_acsia_imgs}>
              <li className={styles.card_acsia_img} >
                <img className={styles.acsia_img} src={icon} alt="" />
              </li>
              <li className={styles.card_acsia_img} >
                <img className={styles.acsia_img} src={icon2} alt="" />
              </li>
              <li className={styles.card_acsia_img} >
                <img className={styles.acsia_img} src={icon3} alt="" />
              </li>
              <li className={styles.card_acsia_img} >
                <img className={styles.acsia_img} src={icon4} alt="" />
              </li>
            </ul>
          </div>

          <div className={styles.card_right}>
            <ul className={styles.card_right_list}>
              <li className={styles.card_righ_item}>
                <h5 className={styles.card_right_title}>Цена телефона</h5>
                <p className={styles.card_right_text}>6 000 000 сум </p>
              </li>

              <li className={styles.card_righ_item}>
                <h5 className={styles.card_right_title}>Общая цена (с наценкой)</h5>
                <p className={styles.card_right_text}>{item.price} </p>

                <ul className={styles.card_right_btns}>
                  <li className={`${styles.card_right_btn} ${styles.active}`}>3 мес</li>
                  <li className={`${styles.card_right_btn}`}>6 мес</li>
                  <li className={`${styles.card_right_btn}`}>12 мес</li>
                  <li className={`${styles.card_right_btn}`}>24 мес</li>
                </ul>

                <p className={styles.markup}>
                  Наценка:
                  <span className={styles.markup_span}>5%</span>
                </p>
              </li>

              <li className={styles.card_righ_item}>
                <h5 className={styles.card_right_title}>Общие характеристики</h5>

                <ul className={styles.phone_characteristics}>
                  <li className={styles.phone_characteristic}>Тип: моноблок (классический)</li>
                  <li className={styles.phone_characteristic}>Стандарт: 2G, 3G, 4G (LTE), 5G</li>
                  <li className={styles.phone_characteristic}>Операционная система: iOS 14</li>
                </ul>

                <div className={styles.phone_info_all}>
                  <button className={styles.phone_info_btn} type='button'>Показать все</button>
                  <img className={styles.phone_info_icon} src={arrow} alt=""  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bascet_box}>
          <img className={styles.backet_img} src={backet} alt="" />
          <span className={styles.bascet_count}>1</span>
        </div>

        <Stock/>
      </div>

    </div>
  )
}

export default GoodsDetalis