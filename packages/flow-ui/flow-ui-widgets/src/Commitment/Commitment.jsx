import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='Princípios Editoriais' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
        Atuar na defesa da democracia representativa, da livre iniciativa, da liberdade de expressão, da transparência nos gastos públicos e dos interesses dos cidadãos na construção de um país mais justo nas oportunidades...   
      </Text>
      <audio
        controls
        src="http://158.69.35.252:8000/radio.mp3">
            <a href="http://158.69.35.252:8000/radio.mp3">
                Download audio
            </a>
    </audio>
    </Card>
  </Section>
)

export default Commitment
