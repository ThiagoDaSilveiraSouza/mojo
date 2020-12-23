import React from "react"
import styled from "styled-components"

const BetterCardDiv = styled.div`
  width: 225px;
  text-align: center;
  margin: 4rem 0;
  h5 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`

export const BetterCard = ({ cardElements }) => {
  return (
    <BetterCardDiv>
      <img src={cardElements.imgPath} alt={cardElements.title} />
      <h5>{cardElements.title}</h5>
      <p>{cardElements.description}</p>
    </BetterCardDiv>
  )
}
