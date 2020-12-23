import React from "react"
import styled from "styled-components"

// components
import { Carousel } from "./components/carousel"

const WhatWeDoSection = styled.section`
  width: 100%;
  background: var(--main-dark-bg);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  .centralizer {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-weight: 100;
      font-size: 1.5rem;
      text-align: center;
    }
  }
`

export const WhatWeDo = () => {
  return (
    <WhatWeDoSection id='what-we-do' data-id='3'>
      <div className='centralizer'>
        <h2 className='category-title'>O que fazemos</h2>
        <h4>Nós assumimos seus desafios e planejamos ações estratégicas</h4>
        <Carousel></Carousel>
      </div>
    </WhatWeDoSection>
  )
}
