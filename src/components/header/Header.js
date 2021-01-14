import React, { useState, useContext, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import "./header.css"

// components
import { SocialMedia } from "../social-media"
import { MenuHamburger } from "./components/menu-hamburger"

// context
import { ThemesContext } from "../../ThemesProvider"
// data
import { NavList } from "./data/menu-list"

// services
import { scrollPageToElementByID } from "../../services"

export const Header = () => {
  const [theme] = useContext(ThemesContext)
  const [headerVisibility, setHeaderVisibility] = useState(true)
  const [navMenuVisibility, setNavMenuVisibility] = useState(false)
  const [lastDistanceToTop, setLastDistanceToTop] = useState(window.pageYOffset)

  const scrollEvent = useCallback(() => {
    const setNewDistance = setTimeout(() => {
      clearTimeout(setNewDistance)
      const distanceToTop = window.pageYOffset
      const pageScrollingToBottom = lastDistanceToTop >= distanceToTop

      pageScrollingToBottom
        ? !headerVisibility && setHeaderVisibility(true)
        : headerVisibility && setHeaderVisibility(false)

      setLastDistanceToTop(distanceToTop)
    }, 500)
  }, [headerVisibility, lastDistanceToTop])

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent)
    return () => {
      window.removeEventListener("scroll", scrollEvent)
    }
  }, [scrollEvent])

  const showNavMenu = useCallback(
    () => setNavMenuVisibility(!navMenuVisibility),
    [setNavMenuVisibility, navMenuVisibility]
  )

  const renderList = (list, className) => {
    if (list.length > 0) {
      return (
        <ul className={className}>
          {list.map((item) => (
            <li key={item.id} className={`font-theme-${theme.name}`}>
              <Link
                to='/'
                onClick={() => {
                  setNavMenuVisibility(false)
                  scrollPageToElementByID(item.elementId)
                }}
                data-nav={item.id}
              >
                {item.name}
              </Link>
              {item.child ? renderList(item.child, "header-sub-menu") : null}
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <>
      <header
        className={headerVisibility ? "show-header" : "hide-header"}
        data-id='1'
      >
        <div className='centralizer'>
          {/* Logo */}
          <div className='logo'>
            <img
              src={`./assets/mojo-logos/logo-${theme.name}.svg`}
              alt='mojo'
            />
          </div>
          {/* Nav */}
          <nav className={navMenuVisibility ? "show-menu" : "hide-menu"}>
            {renderList(NavList, "header-menu")}
            <SocialMedia atualCategory={`icon-color-${theme.name}`} />
          </nav>

          <SocialMedia atualCategory={`icon-color-${theme.name}`} />
          <MenuHamburger
            showOrHideMenu={showNavMenu}
            navMenuStatus={navMenuVisibility}
          ></MenuHamburger>
        </div>
      </header>
      <div
        className='invisible-header'
        onMouseEnter={() => {
          setHeaderVisibility(true)
        }}
      />
    </>
  )
}
