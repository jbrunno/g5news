import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='Princípios Editoriais' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
        Atuar na defesa da democracia representativa, da livre iniciativa, da liberdade de expressão, da transparência nos gastos públicos e dos interesses dos cidadãos na construção de um país mais justo nas oportunidades...   
      </Text>
       <embed id="background-audio" src="http://158.69.35.252/public/g5_news/embed?theme=light" autostart="1"></embed>
    </Card>
  </Section>
)

export default Commitment
