import React, { useContext, useEffect } from 'react'
import './branding.css'
import { Link } from 'react-router-dom'

// Styled
import { PageButton } from '../../index-styled'

// Component
import { Banner } from '../../components/banner'

// Context
import { ThemesContext } from '../../ThemesProvider'
export const Branding = () => {
  const [theme, setTheme] = useContext(ThemesContext)

  useEffect(() => {
    setTheme({ name: 'branding' })
    window.scroll(0, 0)
  }, [])
  const bannerElement = {
    title: 'Branding',
    desktopImgPath: './assets/banners/banner-branding.jpg',
    mobileImgPath: './assets/banners/banner-branding-mobile.jpg',
  }
  return (
    <section className="branding">
      <Banner element={bannerElement} />
      <div className="centralizer">
        <h2 className="page-title">
          Tenha a sua marca fixada na mente do consumidor
        </h2>
        <p className="page-text">
          A atenção que a gestão de uma marca recebe é fundamental nos seus
          resultados. As líderes de mercado sabem muito bem disso e é por essa
          razão que estão entre as suas favoritas. É algo que faz toda diferença
          quando o consumidor chega ao momento de tomar a decisão da compra.
        </p>
        <h4 className="page-sub-title-2">
          Mas como ser a marca escolhida em um cenário cada vez mais
          competitivo?
        </h4>
        <p className="page-text">
          Dar atenção total ao branding não é luxo, mas uma exigência do
          mercado. Se você quer garantir um lugar especial na cabeça e no
          coração dos consumidores, chegou a hora de aplicar Branding na sua
          marca.
        </p>
        <h3 className="page-sub-title-1">O que é branding</h3>
        <p className="page-text">
          Branding é um conjunto de ações estabelecidas para a construção de uma
          percepção positiva quanto à marca junto aos seus consumidores. Dessa
          forma, contempla todo o processo de gestão de marca (brand
          management), com o objetivo de aumentar a sua visibilidade. Outro foco
          importante do branding que vale a pena ser destacado é o lugar que a
          marca busca ocupar através de suas ações. Ele está situado não apenas
          na mente do consumidor, como também em seu coração, o que faz dela uma
          escolha óbvia tanto por aspectos racionais quanto emocionais. <br />
          No atual cenário de alta competitividade entre as empresas, saber
          gerir sua marca é essencial. É através dessa estratégia que se torna
          possível criar uma conexão emocional positiva com seus consumidores e
          demonstrar os diferenciais do seu produto ou serviço. Para tirar
          proveito do branding, é preciso ir além de se posicionar no mercado.
          Sua marca precisa ter personalidade e propósitos para criar
          identificação com o público.
        </p>
        {/* <PageButton className="page-button"> */}
        <PageButton bgColor={theme.name}>
          <Link to="#">Fale agora com um especialista</Link>
        </PageButton>
      </div>
    </section>
  )
}
