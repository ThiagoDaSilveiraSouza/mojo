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

export const Editoracao = () => {
  const [theme, setTheme] = useContext(ThemesContext)
  const bannerElement = {
    title: 'Editoração e diagramação',
    desktopImgPath: './assets/banners/banner-diagramacao.jpg',
    mobileImgPath: './assets/banners/banner-diagramacao-mobile.jpg',
  }
  useEffect(() => {
    setTheme({ name: 'editoracao' })
    window.scroll(0, 0)
  }, [])
  return (
    <PageSection>
      <Banner element={bannerElement} />
      <div className="centralizer">
        <PageTitle color={theme.name}>
          Cause a melhor impressão da sua marca no seu público alvo
        </PageTitle>
        <PageText>
          A Editoração Gráfica é toda a etapa do processo de criação de layouts
          e arquivos finalizados para peças gráficas, que envolve a diagramação,
          paginação, edição e impressão. Praticamente todo o processo é
          realizado digitalmente, por meio de programas como o Adobe
          Illustrator, InDesign e Photoshop.
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
          A diagramação consiste no processo pelo qual a publicação toma sua
          forma visual escolhida pelos editores, segundo as linhas fundamentais
          de planejamento gráfico, de acordo com os critérios pré-definidos para
          a área tema do periódico. Se trata de um trabalho artesanal, pois
          trata cada aspecto do todo (periódico) e parte (artigos) com precisão
          e minúcia, visando a identidade visual da publicação, distinguindo
          assim a mensagem específica de cada componente na mesma página e
          fascículo.
        </PageText>
        <PageText>
          Nesse processo que as imagens são inseridas no texto de forma adequada
          e mais pertinente à compreensão dos assuntos tratados, os títulos e
          demais elementos que compõe o texto serão formatados e dispostos
          coerentemente com os padrões e normas de publicação adotados,
          gerando-se então arquivo em alta resolução para impressão em gráfica,
          e versões para web como PDF web e ePub.
        </PageText>

        <PageButton bgColor={theme.name}>
          <a href="#">fale agora com um especialista</a>
        </PageButton>
      </div>
    </PageSection>
  )
}
