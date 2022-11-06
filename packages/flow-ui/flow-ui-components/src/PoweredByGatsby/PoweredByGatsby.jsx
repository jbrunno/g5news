import React from 'react'
import { Link } from 'theme-ui'
import SVG from 'react-inlinesvg'
import gatsbySVG from '../../assets/studio-debug.png'

const styles = {
  link: {
    display: `inline-flex`,
    color: `heading`,
    fontWeight: `medium`,
    ':visited': {
      color: `heading`
    },
    svg: {
      fill: `omegaDarker`,
      height: 24,
      ml: 2
    }
  }
}

const PoweredByGatsby = () => (
  <Link
    variant='mute'
    target='_blank'
    title='Studio Debug'
    href='https://www.debug.design/'
    rel='noopener'
    sx={styles.link}
  >
    Desenvolvido por
    {gatsbySVG && <img height={24}  margin-left={10} src={gatsbySVG} />}
  </Link>
)

export default PoweredByGatsby
