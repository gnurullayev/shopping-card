import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import style from "./seachForm.module.css"
import { findGoods } from '../../redux/action'
import { useLocation, useNavigate } from 'react-router-dom'
import search from "../../assets/Search.svg"

const SearchForm = () => {
  const [value,setValue] = useState("")
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const navigate = useNavigate()

  const goodsFind = (evt) => {
    evt.preventDefault()

    dispatch(findGoods(value))
    if(value){
      navigate(`${pathname}?s=${value}`)
    }else {
      navigate(`${pathname}`)
    }
  }

  return (
    <form className={style.form} onSubmit={goodsFind}>
        <div className={style.input_group}>
          <input 
          type="text" className={style.form_control}  
          placeholder='Поиск по названию товара'
          aria-label='Поиск по названию товара'
          value={value}
          onChange={e => setValue(e.target.value)}
          />

          <button type='submit' className={style.input_group_text} id="addon-wrapping">
            <img src={search} alt="Search" />
          </button>
        </div>
    </form>
  )
}

export default SearchForm