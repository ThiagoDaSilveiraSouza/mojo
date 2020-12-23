import React, { useState } from 'react'
import './menu-hamburger.css'

export const MenuHamburger = ({ showOrHideMenu, navMenuStatus }) => {
  const [menuStatus, setMenuStatus] = useState(navMenuStatus)

  return (
    <div
      onClick={() => {
        setMenuStatus(!menuStatus)
        showOrHideMenu()
      }}
      className={navMenuStatus ? 'menu-hamburger checked' : 'menu-hamburger'}
    >
      <span></span>
    </div>
  )
}
