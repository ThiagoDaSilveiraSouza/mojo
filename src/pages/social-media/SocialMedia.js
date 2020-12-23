import React, { useContext, useEffect } from 'react'

// Styled
import {
  PageSection,
  PageTitle,
  PageSubTitle1,
  PageSubTitle2,
  PageText,
  PageButton,
} from '../../index-styled'

// Components
import { Banner } from '../../components/banner'

// Context
import { ThemesContext } from '../../ThemesProvider'
export const SocialMedia = () => {
  const [theme, setTheme] = useContext(ThemesContext)
  const bannerElement = {
    title: 'Social Media',
    desktopImgPath: './assets/banners/banner-social-media.jpg',
    mobileImgPath: './assets/banners/banner-social-media-mobile.jpg',
  }
  useEffect(() => {
    setTheme({ name: 'social-media' })
  }, [])
  return (
    <PageSection>
      <Banner element={bannerElement} />
      <div className="centralizer">
        <PageTitle color={theme.name}>
          Gere engajamento e conecte seu público alvo
        </PageTitle>
        <PageText>
          Cada vez mais conectados à internet, usamos esses canais como parte de
          nossas vidas. Afinal, é onde as pessoas estão. Segundo pesquisa das
          empresas Hootsuite e We are Social, 62% da população brasileira está
          ativa nas redes sociais, e o YouTube lidera a lista das redes sociais
          mais acessadas pelos brasileiros, concentrando 60% dos acessos. O
          Facebook (que aparece em primeiro em outros levantamentos) vem logo em
          seguida, em segunda posição, com 59%. Já o WhatsApp está em terceiro
          lugar no páreo com 56%, trazendo o Instagram em quarto, com 40%. Seja
          qual for sua rede social preferida, você deve concordar comigo que
          ocupamos cada vez mais nosso tempo nesses canais, e que, por meio
          deles, precisamos lidar com uma avalanche de informações todos os
          dias. Pensando em aproveitar essa nova realidade do mercado de
          consumo, as empresas entenderam que precisam estar nas redes sociais.
          Por isso, vêm investindo em estratégias para tornar a presença ainda
          mais relevante por lá. Exatamente pelo mesmo motivo, se tornaram
          canais poderosos para que as empresas alcancem um público mais
          qualificado. E, assim, aumentem a percepção de marca com autoridade e
          conquistem sucesso entre os clientes. As mídias sociais, como endereço
          e referência da empresa no mundo digital, tem a sua rotina diária para
          se fazer presente e ter destaque entre tantas outras marcas que
          adotaram os mesmos canais de comunicação e estratégias.
        </PageText>
        <PageText>
          Pensando em aproveitar essa nova realidade do mercado de consumo, as
          empresas entenderam que precisam estar nas redes sociais. Por isso,
          vêm investindo em estratégias para tornar a presença ainda mais
          relevante por lá. Exatamente pelo mesmo motivo, se tornaram canais
          poderosos para que as empresas alcancem um público mais qualificado.
          E, assim, aumentem a percepção de marca com autoridade e conquistem
          sucesso entre os clientes.
        </PageText>
        <PageText>
          As mídias sociais, como endereço e referência da empresa no mundo
          digital, tem a sua rotina diária para se fazer presente e ter destaque
          entre tantas outras marcas que adotaram os mesmos canais de
          comunicação e estratégias.
        </PageText>
        <PageSubTitle1 color={theme.name}>
          As mídias sociais, como endereço e referência da empresa no mundo
          digital, tem a sua rotina diária para se fazer presente e ter destaque
          entre tantas outras marcas que adotaram os mesmos canais de
          comunicação e estratégias.
        </PageSubTitle1>

        <PageSubTitle2>#1: Cronograma de postagens</PageSubTitle2>
        <PageText>
          Criar e manter um cronograma de postagens sempre atualizado é a melhor
          forma de atender às necessidades pontuais dos clientes.
        </PageText>

        <PageSubTitle2>#2: Produzir conteúdo</PageSubTitle2>
        <PageText>
          Um trabalho que requer criatividade e conhecimento técnico sobre
          design e formatos disponíveis para que engaje os usuários.
        </PageText>

        <PageSubTitle2>
          #3: Distribuir conteúdo de impacto nas redes
        </PageSubTitle2>
        <PageText>
          Como cada rede social tem uma especificidade, é preciso ter em mente
          que os conteúdos não podem ser iguais.
        </PageText>

        <PageSubTitle2>#4: Fazer monitoramento diário</PageSubTitle2>
        <PageText>
          Assim, é uma atividade importante para que a empresa possa realizar
          ações corretivas.
        </PageText>

        <PageSubTitle2>#5: Preparar relatórios de desempenho</PageSubTitle2>
        <PageText>
          A produção de relatórios de desempenho para as redes sociais é um
          fruto do trabalho de monitoramento É onde refletir o sucesso do
          trabalho realizado, também ajudam a identificar a necessidade de
          melhorias.
        </PageText>
        <PageButton bgColor={theme.name}>
          <a href="#">fale agora com um especialista</a>
        </PageButton>
      </div>
    </PageSection>
  )
}
