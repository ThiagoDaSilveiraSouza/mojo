import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

// components
import { SocialMedia } from '../social-media'
import { MenuHamburger } from './components/menu-hamburger'

// context
import { ThemesContext } from '../../ThemesProvider'
// data
import { NavList } from './data/menu-list'

export const Header = () => {
  const [theme] = useContext(ThemesContext)
  const [headerVisibility, setHeaderVisibility] = useState(true)
  const [navMenuVisibility, setNavMenuVisibility] = useState(false)
  useEffect(() => {
    const sectionList = document.querySelectorAll('[data-id]')
    const dataSectionList = Array.from(sectionList).map((atualSection) => {
      return {
        id: atualSection.dataset.id,
        name: atualSection.id,
        element: atualSection,
        position: atualSection.offsetTop,
        headerElement: document.querySelector(
          `[data-nav="${atualSection.dataset.id}"]`,
        ),
      }
    })
    const animeScroll = () => {
      const windowTop = window.pageYOffset
      const removerAllActiveMenu = () => {
        dataSectionList.map(({ headerElement }) =>
          headerElement.classList.remove('active-menu'),
        )
      }
      removerAllActiveMenu()
      dataSectionList.forEach(({ position, headerElement }) => {
        if (windowTop > position) {
          headerElement.classList.add('active-menu')
        }
      })
      setHeaderVisibility(false)
      setNavMenuVisibility(false)
    }

    window.addEventListener('scroll', animeScroll)
  }, [])

  window.addEventListener('scroll', () => {
    const menuChange = () => {
      const headerIsHigherOfPage = window.pageYOffset > 90

      !headerIsHigherOfPage
        ? setHeaderVisibility(true)
        : setHeaderVisibility(false)
    }
    menuChange()
  })

  const showNavMenu = () => setNavMenuVisibility(!navMenuVisibility)

  const scrollPageToElementByID = (elementId) => {
    setTimeout(() => {
      const selectedElement = document.querySelector(elementId)
      const elementToTop = selectedElement.offsetTop
      window.scrollTo(0, elementToTop)
    }, 300)
  }
  const renderList = (list, className) => {
    if (list.length > 0) {
      return (
        <ul className={className}>
          {list.map((item) => (
            <li key={item.id} className={`font-theme-${theme.name}`}>
              <Link
                to="/"
                onClick={() => {
                  setNavMenuVisibility(false)
                  scrollPageToElementByID(item.elementId)
                }}
                data-nav={item.id}
              >
                {item.name}
              </Link>
              {item.child ? renderList(item.child, 'header-sub-menu') : null}
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <>
      <header
        className={headerVisibility ? 'show-header' : 'hide-header'}
        data-id="1"
      >
        <div className="centralizer">
          {/* Logo */}
          <div className="logo">
            <img
              src={`./assets/mojo-logos/logo-${theme.name}.svg`}
              alt="mojo"
            />
          </div>
          {/* Nav */}
          <nav className={navMenuVisibility ? 'show-menu' : 'hide-menu'}>
            {renderList(NavList, 'header-menu')}
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
        className="invisible-header"
        onMouseEnter={() => {
          setHeaderVisibility(true)
        }}
      />
    </>
  )
}
