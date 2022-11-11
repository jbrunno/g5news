import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Section from '@components/Section'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const Page404 = props => (
  <Layout {...props}>
    <Seo title='Page Not Found' />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header="Desculpe, esta página não está disponível."
            subheader='Você pode ter digitado incorretamente o endereço ou a página pode ter sido movida.'
          />
        </Section>
        <Section>
          <Button variant='primary' as={Link} to='/'>
          Vá para a página inicial
          </Button>
        </Section>
      </Main>
    </Stack>
  </Layout>
)

export default Page404
