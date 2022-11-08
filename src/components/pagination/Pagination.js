import React from 'react'
import styles from "./pagination.module.css"
import {useSelector} from "react-redux"

import arrovLeft from "../../assets/Arrow -pagination-right.svg"
import arrovRight from "../../assets/Arrow-pagination-left.svg"
import { paginationItem } from '../../extra'

const Pagination = ({page,setPage,}) => {

    const {goods} = useSelector(state => state)

    const paginationArr = paginationItem(goods)

    const pageDicr = () => {
        if(page > 1) {
          setPage(prev => prev - 1)
        }
      }
    
    const pageInck = () => {
    if(page < paginationArr.length) {
        setPage(prev => prev + 1)
    }
    }

  return (
    <div className={styles.pagination}>
    <button 
    className={styles.pagination_arrov_left} 
    type="button"
    onClick={pageDicr}
    >
      <img src={arrovLeft} alt="" />
    </button>

    <ul className={styles.pagination_list}>
      {
        paginationArr.map(el => (
        <li 
        className={`${styles.pagination_item} ${page === el && styles.active}`} 
        key={el}
        onClick={() => setPage(el)}
        >
          {el}
        </li>
        ))
      }
    </ul>

    <button 
    className={styles.pagination_arrov_left} 
    type="button"
    onClick = {pageInck}
    >
      <img src={arrovRight} alt="" />
    </button>
  </div>
  )
}

export default Pagination