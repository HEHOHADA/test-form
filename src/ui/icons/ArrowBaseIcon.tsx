import { FC } from 'react'
import { StyledSvg, SvgProps } from './SvgBase'

export type ArrowDir = 'up' | 'down'

export type ArrowProps = {
  dir?: ArrowDir
}

export const ArrowBaseIcon: FC<ArrowProps & SvgProps> = (props) => {
  const { dir, viewBox = '0 0 30 30', ...other } = props

  return (
    <StyledSvg {...other} viewBox={viewBox} reverse={dir === 'up'}>
      <path
        d='M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z'
        fill='black'
      />
      <mask id='mask0' maskUnits='userSpaceOnUse' x='7' y='11' width='16' height='9'>
        <path
          d='M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0)'>
        <rect width='30' height='30' fill='#0880AE' />
      </g>
    </StyledSvg>
  )
}
