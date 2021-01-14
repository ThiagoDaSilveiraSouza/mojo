import React, { useContext } from "react"
import styled from "styled-components"

// components
import { SocialMedia } from "../../../social-media"
import { MailchimpForm } from "./mailchimp-form"

// services
import { companyData } from "../../../../services"

// Context
import { ThemesContext } from "../../../../ThemesProvider"

const TalkToUsSection = styled.section`
  font-family: var(--main-font);
  padding: 5rem 0;
  .centralizer {
    h2 {
      text-transform: uppercase;
      text-align: center;
      font-size: 2.8rem;
    }
    h4 {
      text-align: center;
      font-size: 1.6rem;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`
const ContactWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  a,
  p {
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    font-size: 1.6em;
    color: white;
    transition: transform 0.2s color 0.2s;
    cursor: pointer;
    :hover {
      transform: scale(1.02);
      color: ${({ atualCategory }) => `var(--${atualCategory}-color)`};
    }
  }
`

export const TalkToUs = () => {
  const [theme] = useContext(ThemesContext)
  const copyPhoneToClipboard = () =>
    navigator.clipboard.writeText(
      `+
    ${companyData.phone.region}${companyData.phone.ddd}
    ${companyData.phone.prefix}${companyData.phone.sufix}`
    )

  return (
    <TalkToUsSection id='talk-to-us'>
      <div className='centralizer'>
        <h2>Fale com a gente</h2>
        <h4>Envie uma mensagem</h4>

        {/* talk-to-us-content */}
        <div className='talk-to-us-content'>
          {/* form */}
          <MailchimpForm />
          {/* contact */}
          <ContactWrapp
            className='contact'
            atualCategory={`icon-color-${theme.name}`}
          >
            <p onClick={copyPhoneToClipboard}>
              <img src='./assets/telefone-icon.svg' alt='telefone' />+
              {companyData.phone.region}({companyData.phone.ddd}){" "}
              {companyData.phone.prefix}-{companyData.phone.sufix}{" "}
              (CEL/WHATSAPP)
            </p>
            <a href='mailto:contato@agenciamojo.com.br'>
              <img src='./assets/e-mail-icon.svg' alt='email' />
              contato@agenciamojo.com.br
            </a>
            <SocialMedia atualCategory={`icon-color-${theme.name}`} />
          </ContactWrapp>
        </div>
      </div>
      <div className='centralizer'></div>
    </TalkToUsSection>
  )
}
