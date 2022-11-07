import React, { forwardRef } from 'react'
import style from "./goodListItem.module.css"

const GoodsListItem = forwardRef(({name,price,price_percentage,percentage_date,poster,acsia}, ref) => {

  const item = acsia.map((el,i) => {
    if(el.isAcsia) {
      return (
        <li className={style.card_acsia_img} key = {i}>
          <img className={style.acsia_img} src={el.icon} alt="" />
        </li>
      )
    }
  })

  return (
    <li className={style.card} ref={ref}>
      <div className={style.card_header}>
        <img className={style.card_img} src={poster} alt={name} />

        <ul className={style.card_acsia_imgs}>
          {
            item
          }
        </ul>
      </div>

      <div className={style.card_body}>
        <h4 className={style.card_title}>{name}</h4>

        <p className={style.price}>{price}</p>

        <p>
          <span className={style.price_percentage}>{price_percentage}</span>
          <span className={style.price_data}>{percentage_date}</span>
        </p>
      </div>
    </li>
  )
})

export default GoodsListItem