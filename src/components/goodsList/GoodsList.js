import {useState,useEffect} from 'react'
import FlipMove from 'react-flip-move';
import GoodsListItem from '../goodListItem/GoodsListItem'
import SearchForm from '../searchForm/SearchForm'
import styles from "./goodsList.module.css"
import data from '../goodListItem/goodsListData'
import arrovLeft from "../../assets/Arrow -pagination-right.svg"
import arrovRight from "../../assets/Arrow-pagination-left.svg"

const GoodsList = () => {
  const [goods,setGoods] = useState(data.slice(0,8));
  const [page,setPage] = useState(1)
  const arr = []
  
  const paginationCount = () => {
    const count = Math.ceil(data.length / 8) 
    
    for (let i = 1; i <= count; i++) {
      arr.push(i)
    }
  }
  paginationCount()

  const pageDicr = () => {
    if(page > 1) {
      setPage(prev => prev - 1)
    }
  }

  const pageInck = () => {
    if(page < arr.length) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    const pageData = data.slice(8 * (page-1), page * 8 )
    setGoods(pageData)
  },[page])

  console.log(goods);

  return (
    <div className={styles.goods_inner}>
      <h2 className={styles.title}>Оформить заказ</h2>
      <SearchForm/>
      <p className={styles.goods_count}>Все товары ({data.length})</p>
      <ul className={styles.goods_list}>
        <FlipMove className={styles.goods_list}>
          {
            goods.map(el => (
              <GoodsListItem key = {el.id} {...el}/>
            ))
          }
        </FlipMove>
      </ul>

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
            arr.map(el => (
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
    </div>
  )
}

export default GoodsList