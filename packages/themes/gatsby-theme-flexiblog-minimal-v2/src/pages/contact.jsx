import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'

export default props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Fale Conosco"
          subheader='O Site G5News é voltado para todas as classes, com forte atuação em Goiás. Conta hoje com média de 50 mil visitas diárias e segue uma linha editorial moderada, mas de forte opinião. Nossa equipe é composta por jornalistas gabaritados e comprometidos com a ética e a verdade dos fatos.'
        />
        <Divider />
        <ContactForm />
      </Main>
    </Stack>
  </Layout>
)
