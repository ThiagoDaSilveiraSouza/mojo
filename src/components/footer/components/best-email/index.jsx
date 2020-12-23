import React, { useContext } from 'react'
import './best-email.css'

// styled
import { BestEmailSection } from './best-email-styled'

// Context
import { ThemesContext } from '../../../../ThemesProvider'

export const BestEmail = () => {
  const [theme] = useContext(ThemesContext)
  return (
    <BestEmailSection bgColor={theme.name} id="best-email" data-id="4">
      <div className="centralizer">
        <h3>Cadastre o seu melhor e-mail</h3>
        <h5> e receba dicas de como melhorar seu negócio</h5>
        <form className="enter-best-email">
          <input
            type="email"
            autoComplete="on"
            placeholder="Informe seu email"
          />
          <button>
            ok <span></span>
          </button>
        </form>
      </div>
    </BestEmailSection>
  )
}
