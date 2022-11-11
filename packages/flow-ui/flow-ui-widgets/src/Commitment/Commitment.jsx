import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='Princípios Editoriais' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
        Atuar na defesa da democracia representativa, da livre iniciativa, da liberdade de expressão, da transparência nos gastos públicos e dos interesses dos cidadãos na construção de um país mais justo nas oportunidades...   
      </Text>
      <iframe src="http://158.69.35.252/public/g5_news/embed?theme=light" frameborder="0" allowtransparency="true" style="width: 100%; min-height: 150px; border: 0;"></iframe>
    </Card>
  </Section>
)

export default Commitment
