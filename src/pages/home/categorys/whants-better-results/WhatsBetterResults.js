import React from "react"
import styled from "styled-components"

// components
import { BetterCard } from "./components/better-card"

// data
import { BetterCardList } from "./components/better-card/better-card-list"

const WhantsSection = styled.section`
  color: #707070;
  text-align: center;
  margin: 50px 0;
`
const WhantsH2 = styled.h2`
  font-size: 2.8rem;
  margin: 0;
`
const WhantsH4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0;
`
const BetterResultsCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`
export const WhantsBetterResults = () => {
  return (
    <WhantsSection id='whants-better-results'>
      <div className='centralizer'>
        <WhantsH2 className='category-title'>
          Quer melhorar os resultados da sua marca?
        </WhantsH2>
        <WhantsH4>
          Assim como na bússola, existem quatro pontos cardeais que direcionam e
          orientam sua localização. A ideia é a mesma quando falamos do seu
          negócio, direcionamos e orientamos sua marca a ser um grande Mojo no
          seu nicho de atuação, destacando a sua marca de todas as outras no
          mercado! Nossos pontos são:
        </WhantsH4>

        <BetterResultsCardsWrapper className='better-results-cards'>
          {BetterCardList.map((cardElement) => (
            <BetterCard cardElements={cardElement} key={cardElement.id} />
          ))}
        </BetterResultsCardsWrapper>
      </div>
    </WhantsSection>
  )
}
