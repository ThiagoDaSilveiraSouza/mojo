import React from "react"
import styled from "styled-components"

// components
import { Animation } from "./component/animation"

const WhoWheAreSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
  > div {
    display: flex;
    flex-wrap: wrap;
    min-width: 300;
    gap: 3rem;
  }
`
const WhoDescription = styled.div`
  flex: 1 1 50rem;
  h2 {
    color: var(--green-color);
    text-align: left;
  }
  h3 {
    color: var(--dark-font-color);
    text-align: left;
    font-size: 20px;
    letter-spacing: 1px;
    max-width: 395px;
    font-weight: 400;
  }
  h4 {
    font-size: 20px;
    color: var(--green-color);
  }
  p {
    color: #797979;
    font-size: 15px;
    line-height: 25px;
  }
`
const WhoAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 50rem;
  img {
    width: 100%;
  }
`

export const WhoWeAre = () => {
  return (
    <WhoWheAreSection id='who-we-are' data-id='2'>
      <div className='centralizer'>
        {/* who-description */}
        <WhoDescription className='who-description'>
          <h2 className='category-title'>Quem Somos</h2>
          <h3>
            Apontamos a direção certa para o caminho que a sua marca procura!
          </h3>
          <p>
            Com uma identidade singular e objetiva, somos uma agência de
            Marketing e publicidade, composta por uma equipe de alto nível
            técnico e experiência profissional no mercado nacional e
            internacional.
          </p>
          <h4>E por que Mojo?</h4>
          <p>
            Somos apaixonados em tornar seus sonhos realidade! Criar um projeto
            poderoso e positivo, é o que nos motiva e o resto do mundo reconhece
            isto. A Mojo tem um papel vital em nossa busca por significado e
            prazer, uma vez que envolve dois pontos simples: amar o que se faz e
            compartilhar isso com o mundo.
          </p>
        </WhoDescription>
        {/* who-animation */}
        <WhoAnimation className='who-animation'>
          <Animation />
        </WhoAnimation>
      </div>
    </WhoWheAreSection>
  )
}
