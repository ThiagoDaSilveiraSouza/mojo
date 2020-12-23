import React from 'react'
import './banner.css'

export const Banner = ({ element }) => {
  const bannerElement = {
    title: 'Titulo',
    span: 'a',
    title2: '',
    desktopImgPath: './assets/banners/banner-design.jpg',
    mobileImgPath: './assets/banners/banner-design-mobile.jpg',
  }

  return (
    <div className="banner">
      <picture>
        <source
          media="(min-width: 601px)"
          srcSet={element.desktopImgPath || bannerElement.desktopImgPath}
        />
        <source
          media="(max-width: 601px)"
          srcSet={element.mobileImgPath || bannerElement.mobileImgPath}
        />
        <img
          src={element.desktopImgPath || bannerElement.desktopImgPath}
          alt={element.title || bannerElement.title}
        />
      </picture>
      {element.span ? (
        <h1>
          {element.title}
          <span>{element.span}</span>
          {element.title2}
        </h1>
      ) : (
        <h1>{element.title || bannerElement.title}</h1>
      )}
    </div>
  )
}
