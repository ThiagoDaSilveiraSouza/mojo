import styled from 'styled-components'


export const PageSection = styled.section`
  padding-bottom: 40px;
`
export const PageTitle = styled.h2`
  font-family: var(--main-font);
  font-weight: 700;
  color: var(--${({ color }) => color || 'home'}-color);
  font-size: 30px;
`

export const PageSubTitle1 = styled.h3`
  font-family: var(--main-font);
  font-weight: 700;
  color: var(--${({ color }) => color || 'home'}-color);
  font-size: 20px;
`

export const PageSubTitle2 = styled.h4`
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 18px;
  color: #474747;
`

export const PageText = styled.p`
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 15px;
`

export const PageButton = styled.button`
  text-transform: uppercase;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  background: var(--${({ bgColor }) => bgColor || 'home'}-color);
  width: -moz-fit-content;
  width: fit-content;
  transition: 0.3s;
  a{
    font-size: 14px;
    padding: 10px 20px;
    font-weight: 600;
    color: white;
  }
`