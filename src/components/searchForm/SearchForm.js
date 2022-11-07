import React from 'react'
import style from "./seachForm.module.css"
import search from "../../assets/Search.svg"

const SearchForm = () => {
  return (
    <form className={style.form}>
        <div class={style.input_group}>
            <input 
            type="text" class={style.form_control}  
            placeholder='Поиск по названию товара'
            aria-label='Поиск по названию товара'
            />

            <button class={style.input_group_text} id="addon-wrapping">
                <img src={search} alt="Search" />
            </button>
        </div>
    </form>
  )
}

export default SearchForm