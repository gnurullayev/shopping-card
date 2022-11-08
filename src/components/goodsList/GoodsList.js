import {useState,useEffect} from 'react'
import FlipMove from 'react-flip-move';
import {useSelector,useDispatch} from "react-redux"
import GoodsListItem from '../goodListItem/GoodsListItem'
import SearchForm from '../searchForm/SearchForm'
import styles from "./goodsList.module.css"

import { PageGoods} from '../../redux/action';
import Pagination from '../pagination/Pagination';
import BreadCrumb from '../breadcrumb/BreadCrumb';

const GoodsList = () => {
  const [page,setPage] = useState(1)

  const {goods,pageGoods} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(PageGoods(page))
  },[page,dispatch])

  return (
    <div className={styles.goods_inner}>
      <BreadCrumb name = "Оформить заказ"/>
      <h2 className={styles.title}>Оформить заказ</h2>
      <SearchForm/>
      <p className={styles.goods_count}>Все товары ({goods.length})</p>
      <ul className={styles.goods_list}>
        <FlipMove className={styles.goods_list}>
          {
            pageGoods.map(el => (
              <GoodsListItem key = {el.id} {...el}/>
            ))
          }
        </FlipMove>
      </ul>
      <Pagination
      page = {page}
      setPage = {setPage}
      />
    </div>
  )
}

export default GoodsList