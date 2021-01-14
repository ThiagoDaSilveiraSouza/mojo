import React from 'react'
import './footer.css'

// componets
// import { BestEmail } from './components/best-email'
import { TalkToUs } from './components/talk-to-us'

export const Footer = () => {
  const atualYear = new Date().getFullYear()
  return (
    <footer>
      {/* <BestEmail /> */}
      <TalkToUs />
      <h5>©{atualYear} Mojo Agência Digital</h5>
    </footer>
  )
}
