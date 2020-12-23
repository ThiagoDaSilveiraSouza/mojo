import React, { useContext, useEffect } from "react"
import styled from "styled-components"

// Components
import { Banner } from "../../components/banner"
import {
  PageButton,
  PageSubTitle1,
  PageSubTitle2,
  PageText,
  PageTitle,
} from "../../index-styled"

export const MarketingSection = styled.section`
  padding-bottom: 40px;
  box-sizing: border-box;
`

// Context
import { ThemesContext } from "../../ThemesProvider"

export const Marketing = () => {
  const [theme, setTheme] = useContext(ThemesContext)
  const bannerElement = {
    title: "Marketing Digital",
    desktopImgPath: "./assets/banners/banner-marketing-digital.jpg",
    mobileImgPath: "./assets/banners/banner-marketing-digital-mobile.jpg",
  }
  useEffect(() => {
    setTheme({ name: "marketing" })
    window.scroll(0, 0)
  }, [])
  return (
    <MarketingSection>
      <Banner element={bannerElement} />
      <div className='centralizer'>
        <PageTitle color={theme.name}>
          Conquiste presença online e transforme seu público em clientes
        </PageTitle>
        <PageText>
          Marketing Digital é o conjunto de táticas digitais que negócios (ou
          pessoas) utilizam para atingir seus objetivos de marketing. Essas
          táticas são implementadas por meio de canais como SEO, mídia paga,
          e-mail e seus principais objetivos são: adquirir clientes, desenvolver
          uma marca e se conectar com o público-alvo. Realizar estratégias de
          marketing digital é um dos segredos que impulsionam negócios, e
          acreditamos que essas estratégias podem ser aplicadas em todas os
          negócios.
        </PageText>
        <PageText>
          Hoje, o e-commerce é uma das maiores modalidades de comércio,
          movimentando bilhões a cada ano. E isso se deve, em grande parte, a
          diversas estratégias de marketing digital. Por mais que o marketing
          digital esteja ligado a qualquer tipo de aparelho eletrônico,
          utilizado para vender ou anunciar um produto ou serviço, cada canal,
          cada mídia, tem sua peculiaridade. Mesmo que hoje exista a chamada
          “cultura da convergência“, onde diversas mídias conversam entre si,
          focando em um único objetivo, deve-se estar atento para o significado
          de cada canal de vendas dentro do marketing digital.
        </PageText>
        <PageSubTitle1 color={theme.name}>
          5 dicas para criar um plano de marketing para sua empresa
        </PageSubTitle1>
        <PageSubTitle2>#1: Trace os objetivos da sua marca</PageSubTitle2>
        <PageText>
          Busca soluções originais de função, de uso de materiais e tecnologia,
          de produtividade e sustentabilidade, agregando novos valores a
          produtos e serviços.
        </PageText>
        <PageSubTitle2>#2: Conheça o seu público alvo</PageSubTitle2>
        <PageText>
          Definir os clientes com os quais se deseja falar é fundamental para
          direcionar o seu plano de marketing. Invista em descobrir quem são as
          pessoas que sua marca atinge. Toda a estratégia de vendas se torna
          mais fácil quando você conhece o público que compra seu produto.
        </PageText>
        <PageSubTitle2>#3: Estude a concorrência</PageSubTitle2>
        <PageText>
          É muito importante que a empresa saiba quem são seus concorrentes,
          para que possam ser criadas vantagens competitivas. Dessa maneira, o
          plano de marketing vai traçar estratégias para se estar sempre a
          frente, buscando inovar e ser um diferencial no mercado. Com isso, sua
          empresa irá se destacar e atingir mais clientes e melhores resultados.
        </PageText>
        <PageSubTitle2>#4: Inove Não se acomode!</PageSubTitle2>
        <PageText>
          Busque sempre novas ferramentas para atrair clientes, divulgar seu
          produto e se comunicar com o público. Mantenha o público interessado
          no que você tem a dizer. Procure traçar estratégias para estar
          presente diariamente na rotina de quem se deseja atingir. Se faça
          visto por todos!
        </PageText>
        <PageSubTitle2>#5: Acompanhe seu cliente</PageSubTitle2>
        <PageText>
          Esse será o principal indicador na hora de revisar o plano de
          marketing. O cliente deve ter uma boa experiência com o seu serviço e
          se isso não está acontecendo, busque entender o motivo. Questione,
          planeje e mude, se for preciso, o seu planejamento. Deixe o público
          sempre realizado e contente com o que está sendo oferecido.
        </PageText>
        <PageButton bgColor={theme.name}>
          <a href='#'>Fale agora com um especialista</a>
        </PageButton>
      </div>
    </MarketingSection>
  )
}
