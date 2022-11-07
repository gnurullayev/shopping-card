import React from 'react'
import SearchForm from '../searchForm/SearchForm'
import styles from "./goodsList.module.css"

const GoodsList = () => {
  return (
    <div className={styles.good_list}>
      <h2 className={styles.title}>Оформить заказ</h2>
      <SearchForm/>
    </div>
  )
}

export default GoodsList