import React, { useRef, useState, useEffect } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

// data
import { categoryList } from './data'

// components
import { CarouselCard } from '../carousel-card'

// styled
import { StyledCarouse, StyledCarouselWrapper } from './styled-carousel'

export const Carousel = () => {
  const carouselElement = useRef(null)
  const [leftButtonStatus, setLeftButtonStatus] = useState(false)
  const [rightButtonStatus, setRightButtonStatus] = useState(true)
  const moveCarousel = {
    toLeft: () => carouselElement.current.scrollBy(-300, 0),
    toRight: () => carouselElement.current.scrollBy(300, 0),
  }

  useEffect(() => {
    carouselElement.current.addEventListener('scroll', (event) => {
      const carousel = event.target
      const minScrollLeft = carousel.scrollLeft <= 10
      const maxScrollLeft =
        carousel.scrollWidth - carousel.offsetWidth === carousel.scrollLeft
      setTimeout(() => {
        minScrollLeft ? setLeftButtonStatus(false) : setLeftButtonStatus(true)
        maxScrollLeft ? setRightButtonStatus(false) : setRightButtonStatus(true)
      }, 300)
    })
  }, [carouselElement])

  return (
    <StyledCarouse>
      <StyledCarouselWrapper ref={carouselElement}>
        {categoryList.map((category) => (
          <CarouselCard categoryCard={category} key={category.id} />
        ))}
      </StyledCarouselWrapper>
      <MdKeyboardArrowLeft
        className={`carousel-arrow ${
          !leftButtonStatus ? 'disable-button' : ''
        }`}
        size="100%"
        onClick={() => moveCarousel.toLeft()}
      />
      <MdKeyboardArrowRight
        className={`carousel-arrow ${
          !rightButtonStatus ? 'disable-button' : ''
        }`}
        size="100%"
        onClick={() => moveCarousel.toRight()}
      />
    </StyledCarouse>
  )
}
