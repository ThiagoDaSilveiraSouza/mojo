import React, { useContext, useEffect } from "react"
import "./design.css"

// Styled
import { PageButton } from "../../index-styled"

// Component
import { Banner } from "../../components/banner"
import { DesignBenefits } from "./components/design-benefits"

// context
import { ThemesContext } from "../../ThemesProvider"

export const Design = () => {
  const [theme, setTheme] = useContext(ThemesContext)
  useEffect(() => {
    setTheme({ name: "design" })
    window.scroll(0, 0)
  }, [setTheme])
  const bannerElement = {
    title: "Design",
    desktopImgPath: "./assets/banners/banner-design.jpg",
    mobileImgPath: "./assets/banners/banner-design-mobile.jpg",
  }
  return (
    <section className='design'>
      <Banner element={bannerElement} />
      <div className='centralizer'>
        <h2 className='page-title'>
          Tenha a sua marca fixada na mente do consumidor
        </h2>
        <p className='page-text'>
          Hoje, mais do que nunca, a empresa deve estar preparada para ter sua
          imagem comparada com a concorrência. Nos mercados nacional e
          internacional todos estão competindo por um espaço no desejo do
          consumidor. Disputam preço, qualidade e novidade.No meio de tantas
          ofertas, o consumidor quer adquirir o produto que melhor atenda às
          suas necessidades pelo menor preço.Deve-se conquistar o desejo do
          consumidor no primeiro olhar. Uma vez conquistado, ele facilmente
          associará o produto à empresa.
        </p>
        <p className='page-text'>
          Além de ser um importante fator na conquista do consumidor, o design é
          uma alternativa para a redução dos custos de produção, fazendo uso de
          diferentes matérias-primas, associadas ou não, e ajudando na
          racionalização de gastos.O design auxilia as empresas também na área
          de preservação ambiental, propondo alternativas capazes de reduzir o
          impacto da utilização dos recursos naturais não renováveis.
        </p>
        <p className='page-text'>
          O design é fator diferenciador de produtos e serviços. Ele destaca
          aspectos, como identidade, qualidade e satisfação do cliente, que são
          condicionantes fundamentais para a manutenção e conquista de mercados.
          <br />O design se manifesta, principalmente, através de duas
          qualidades: funcionalidade e estilo.As pessoas sempre associam design
          ao bom gosto, a algo bem-feito. Os melhores recursos que temos para
          descobrir o design são os nossos sentidos, principalmente os da visão
          e do tato, empregados no uso do produto ou serviço.
        </p>
        <h3 className='page-sub-title-1'>
          O design é o caminho <br />
          para sua empresa alcançar:
        </h3>
        <DesignBenefits />
        <PageButton bgColor={theme.name}>
          <a href='#'>Fale agora com um Especialista</a>
        </PageButton>
      </div>
    </section>
  )
}
