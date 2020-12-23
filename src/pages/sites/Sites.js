import React, { useContext, useEffect } from 'react'

// Styled
import {
  PageSection,
  PageTitle,
  PageSubTitle1,
  PageText,
  PageButton,
} from '../../index-styled'

// Components
import { Banner } from '../../components/banner'

// Context
import { ThemesContext } from '../../ThemesProvider'

export const Sites = () => {
  const [theme, setTheme] = useContext(ThemesContext)
  const bannerElement = {
    title: 'Sites e Landing pages',
    desktopImgPath: './assets/banners/banner-sites.jpg',
    mobileImgPath: './assets/banners/banner-sites-mobile.jpg',
  }
  useEffect(() => {
    setTheme({ name: 'sites' })
    window.scroll(0, 0)
  }, [])
  return (
    <PageSection>
      <Banner element={bannerElement} />
      <div className="centralizer">
        <PageTitle color={theme.name}>
          Conquiste o visitante com um site profissional
        </PageTitle>
        <PageText>
          Sem dúvida, poucas empresas subsistirão diante de uma concorrência
          desse porte, promovendo suas marcas com tamanha desigualdade. Contudo,
          hoje em dia, com o advento da Internet e o extraordinário estímulo dos
          websites, as possibilidades são infinitas. A finalidade principal dos
          websites é funcionar como uma interface entre a empresa e os usuários
          da rede. Mesmo aquelas holdings sabem do potencial ilimitado da
          Internet e todas elas têm poderosos websites. Bem construídos e
          otimizados, com todas as funções e atribuições, continuam a ampliar as
          fronteiras de promoção da marca. Como se fosse até necessário!
        </PageText>

        <PageSubTitle1 color={theme.name}>
          Qualquer empreendedor de visão sabe da necessidade de se divulgar
          através da Internet e o lugar para que isso seja realizado é via
          website.
        </PageSubTitle1>
        <PageText>
          Websites promovem, websites divulgam, websites vendem, websites dão
          lucros e websites custam pouco. Websites possuem finalidades e funções
          múltiplas, ainda que, por vezes, acessórias.
        </PageText>

        <PageSubTitle1 color={theme.name}>
          Qualquer empreUm novo jeito de divulgar
        </PageSubTitle1>
        <PageText>
          Aquelas campanhas massivas e ultra-onerosas de outrora já não são mais
          requisitos essenciais para evidenciar uma marca. Isto porque agora os
          websites são os responsáveis por isso. Os Websites são a comunicação
          rápida, fácil e econômica de uma empresa com o mundo exterior. Acima
          de tudo, os websites contam com todo um aparato sofisticado e
          tecnologicamente avançado online permanente, resultando em constante
          atualização.
        </PageText>

        <PageButton bgColor={theme.name}>
          <a href="#">fale agora com um especialista</a>
        </PageButton>
      </div>
    </PageSection>
  )
}
