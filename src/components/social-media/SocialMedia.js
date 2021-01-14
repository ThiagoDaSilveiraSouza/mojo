import React from "react"
import styled from "styled-components"

// components
import {
  InstagramIcon,
  // TwitterIcon,
  WhatsAppIcon,
  FacebookIcon,
} from "./data/social-media-icons"
import { WhatsAppLink } from "../../services"

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    svg {
      border-radius: 100%;
      box-sizing: border-box;
      overflow: hidden;
      transition: 0.3s;
      path {
        background-color: white;
      }
      :hover {
        transform: scale(1.5);
      }
    }
    .icon-color-home:hover {
      background: var(--green-color);
    }
    .icon-color-branding:hover {
      background: var(--branding-color);
    }
    .icon-color-e-commerce:hover {
      background: var(--e-commerce-color);
    }
    .icon-color-marketing:hover {
      background: var(--marketing-color);
    }
    .icon-color-social-media:hover {
      background: var(--social-media-color);
    }
    .icon-color-sites:hover {
      background: var(--sites-color);
    }
    .icon-color-design:hover {
      background: var(--design-color);
    }
    .icon-color-editoracao:hover {
      background: var(--editoracao-color);
    }
    .icon-color-foto:hover {
      background: var(--foto-color);
    }
  }
`

export const SocialMedia = ({ atualCategory }) => {
  const whatsappMessage =
    "Ola, acabei de visitar o site da mojo e gostaria de mais informações! "
  return (
    <SocialMediaWrapper className='social-media'>
      <a
        href='https://www.facebook.com/AgenciaMojo/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <FacebookIcon atualCategory={atualCategory || "icon-color-home"} />
      </a>
      <a
        href={WhatsAppLink(whatsappMessage)}
        target='_blank'
        rel='noreferrer noopener'
      >
        <WhatsAppIcon atualCategory={atualCategory || "icon-color-home"} />
      </a>
      {/* <a href=''>
        <TwitterIcon atualCategory={atualCategory || "icon-color-home"} />
      </a> */}
      <a
        href='https://www.instagram.com/agencia.mojo/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <InstagramIcon atualCategory={atualCategory || "icon-color-home"} />
      </a>
    </SocialMediaWrapper>
  )
}
