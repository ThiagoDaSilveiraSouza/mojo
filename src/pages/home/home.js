import React, { useEffect, useContext } from "react"
import "./home.css"

// Components
import { WhoWeAre } from "./categorys/who-we-are"
import { WhatWeDo } from "./categorys/what-we-do"
import { WhantsBetterResults } from "./categorys/whants-better-results"
import { Banner } from "../../components/banner"
// Context
import { ThemesContext } from "../../ThemesProvider"

export const Home = ({ headerColor }) => {
  const [, setTheme] = useContext(ThemesContext)

  useEffect(() => {
    setTheme({ name: "home" })
  }, [setTheme])

  const bannerElement = {
    title: "A ",
    span: "sua marca ",
    title2: "na direção certa",
    desktopImgPath: "./assets/banners/banner-home.jpg",
    mobileImgPath: "./assets/banners/banner-home-mobile.jpg",
  }

  return (
    <section className='home'>
      <Banner element={bannerElement} data-id='1' />
      <WhoWeAre />
      <WhatWeDo />
      <WhantsBetterResults />
    </section>
  )
}
