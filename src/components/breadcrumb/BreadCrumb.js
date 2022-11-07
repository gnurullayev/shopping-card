import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { data } from '../menu/menuData'

const BreadCrumb = () => {
    const [value,setValue] = useState()

    const {pathname} = useLocation()
  
  useEffect(() => {
    const path = data.find(el => el.pathname === pathname).name
    setValue(path)
  },[pathname])
  return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item">
        <Link className='breadcrumb-link' to={pathname}>Заявки</Link>
      </li>
      
      <li className="breadcrumb-item active" aria-current="page">
        {value}
      </li>
    </ol>
  </nav>
  )
}

export default BreadCrumb