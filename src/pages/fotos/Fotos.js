import React, { useContext, useEffect } from 'react'

// Styled
import {
  PageSection,
  PageTitle,
  PageText,
  PageButton,
} from '../../index-styled'

// Components
import { Banner } from '../../components/banner'

// Context
import { ThemesContext } from '../../ThemesProvider'

export const Fotos = () => {
  const [theme, setTheme] = useContext(ThemesContext)
  const bannerElement = {
    title: 'Foto e Vídeo',
    desktopImgPath: './assets/banners/banner-foto.jpg',
    mobileImgPath: './assets/banners/banner-foto-mobile.jpg',
  }
  useEffect(() => {
    setTheme({ name: 'foto' })
    window.scroll(0, 0)
  }, [])
  return (
    <PageSection>
      <Banner element={bannerElement} />
      <div className="centralizer">
        <PageTitle color={theme.name}>
          A imagem que o seus clientes querem ver
        </PageTitle>
        <PageText>
          A foto além de tornar o texto mais atraente, chama a atenção para o
          produto. Inspiração, criatividade, originalidade para transformar o
          seu canal em um Business relevante e desejável.
        </PageText>
        <PageText>
          A acessibilidade é uma faca de dois gumes. Hoje é mais fácil do que
          nunca chegar ao seu público, mas ele também é segmentando
          constantemente pelos seus concorrentes. Se você quiser atrair a
          atenção das pessoas e merecer o respeito delas, vai ter que criar
          muitos conteúdos incríveis. Incorporar imagens em seu conteúdo é um
          passo na direção certa, mas não vai ser suficiente para te estabelecer
          como autoridade online. Ter conteúdo visual totalmente exclusivo é
          também uma forma fácil de ser reconhecido como autoridade online.
        </PageText>
        <PageText>
          Uma imagem nítida, marcante e única é capaz de destacar e nortear a
          marca na preferência do cliente, causando a credibilidade necessária
          na tomada de decisão do consumidor da marca. Atraído pela postura
          visual e o bom gosto no qual o público alvo se identifique, com base
          sobre o que estará sendo apresentado diante dos olhos e ouvidos.
        </PageText>
        <PageText>
          Nada melhor que utilizar fotos e vídeos profissionais para promover
          sua marca e seus produtos nas mídias sociais.
        </PageText>

        <PageButton bgColor={theme.name}>
          <a href="#">fale agora com um especialista</a>
        </PageButton>
      </div>
    </PageSection>
  )
}
