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

export const ECommerce = () => {
  const [theme, setTheme] = useContext(ThemesContext)
  const bannerElement = {
    title: 'E-commerce',
    desktopImgPath: './assets/banners/banner-ecommerce.jpg',
    mobileImgPath: './assets/banners/banner-ecommerce-mobile.jpg',
  }
  useEffect(() => {
    setTheme({ name: 'e-commerce' })
    window.scroll(0, 0)
  }, [])
  return (
    <PageSection>
      <Banner element={bannerElement} />
      <div className="centralizer">
        <PageTitle color={theme.name}>
          Lorem ipsum curabitur aliquam quisque vel massa habitasse
        </PageTitle>
        <PageText>
          Geralmente, neste modelo de negócio, são vendidos produtos ou serviços
          que estamos acostumados a ver e consumir por aí quando caminhamos em
          um shopping. Sim, o mesmos produtos que vemos no mundo físico. A
          diferença é que, quando pensamos no que é Ecommerce, é necessário
          entender que tudo isso acontece pela internet. Na verdade, a internet
          facilita a venda de quase tudo que existe. Não é segredo que, ao longo
          dos anos, o varejo se transformou junto com os clientes. Hoje, as
          pessoas buscam novas formas de consumir e prezam muito por praticidade
          e segurança. Comprar pela internet se tornou um hábito cada vez mais
          comum entre os consumidores
        </PageText>

        <PageSubTitle1 color={theme.name}>
          Como funciona a estrutura de um e-commerce?
        </PageSubTitle1>
        <PageText>
          Basicamente, a roda gira da seguinte maneira: exposição de produtos,
          pagamento (concretização da venda) e entrega de mercadorias. No meio
          disso, existem processos que vão do marketing e atendimento inicial,
          passando pela logística de envio e pós-venda. Vender pela internet é
          vantajoso, em primeiro lugar, porque é possível diminuir custos. Você
          não precisa, necessariamente, manter uma loja física — basta ter um
          ambiente para estocar produtos e despachar os pedidos.
        </PageText>

        <PageButton bgColor={theme.name}>
          <a href="#">fale agora com um especialista</a>
        </PageButton>
      </div>
    </PageSection>
  )
}
