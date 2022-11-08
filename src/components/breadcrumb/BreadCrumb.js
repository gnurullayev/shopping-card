import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { data } from '../menu/menuData'

const BreadCrumb = ({name}) => {
  const [value,setValue] = useState()
  const [pathnameLength, setPathnameLength] = useState(null)

  const {pathname} = useLocation()
  const {id} = useParams()

  useEffect(() => {
    if(id){
      const path = data.find(el => el.pathname === pathname.slice(0,9))
      setValue(path.name)
      setPathnameLength(path.pathname.length)
    }else{
      const path = data.find(el => el.pathname === pathname).name
      setValue(path)
      setPathnameLength(pathname.length)
    }
  },[pathname])

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link className='breadcrumb-link' to={pathname.slice(0,pathnameLength)}>Заявки</Link>
        </li>
        
      {
        id 
        ?
        (
        <>
          <li className="breadcrumb-item " aria-current="page">
            <Link className='breadcrumb-link' to={pathname.slice(0,pathnameLength)}>{value}</Link>
          </li>

          <li className="breadcrumb-item active">
            {name}
          </li>
        </>
        )
        :
        <li className="breadcrumb-item active">
          {name}
        </li>

      }
      </ol>
    </nav>
  )
}

export default BreadCrumb