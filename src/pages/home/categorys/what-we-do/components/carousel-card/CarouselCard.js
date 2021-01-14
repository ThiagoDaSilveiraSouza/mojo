import React from "react"
import styled from "styled-components"
import { ImWhatsapp } from "react-icons/im"

// services
import { WhatsAppLink } from "../../../../../../services"

const StyledCarouselCard = styled.div`
  width: 280px;
  min-width: 260px;
  max-width: 80vw;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  margin: 10px;
  height: fit-content;
  scroll-snap-align: start;
  flex: none;
  transition: 0.3s;
  :hover {
    div:first-child div {
      background: rgb(0, 0, 0, 0.3);
    }
    .know-more {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
const TopSide = styled.div`
  background: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 210px;
  position: relative;
  transition: filter 0.2s;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.4s;
  }
  span {
    position: absolute;
    color: black;
    background: white;
    padding: 0 20px;
    border-radius: 50px;
    z-index: 10;
    transform: translateY(150px);
    transition: 0.4s;
    opacity: 0;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`
const DownSide = styled.div`
  text-align: center;
  background: white;
  color: black;
  padding: 15px 20px;
  height: 123px;
  box-sizing: border-box;
  h5 {
    margin: 0;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: black;
    font-weight: bolder;
  }
  p {
    font-size: 1.4rem;
    color: #474747;
  }
`
export const CarouselCard = ({ categoryCard }) => {
  const { name, description, color, imgPath } = categoryCard
  const whatsappMessage = `Ola! Acabei visitar o site da mojo e estou interessado em ${name.toUpperCase()}, gostaria de mais informações? `
  return (
    <StyledCarouselCard>
      <a
        href={WhatsAppLink(whatsappMessage)}
        target='_blank'
        rel='noopener noreferrer'
      >
        <TopSide color={color}>
          <div></div>
          <img src={`./assets/services-icons/${imgPath}`} alt={name} />
          <span className='know-more'>
            <ImWhatsapp />
            Saiba Mais
          </span>
        </TopSide>
        <DownSide>
          <h5>{name}</h5>
          <p>{description}</p>
        </DownSide>
      </a>
    </StyledCarouselCard>
  )
}
