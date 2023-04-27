import { ReactNode } from 'react'
import * as S from './styles'

export type LineColors = 'primary' | 'secondary'
export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium'
  lineColor?: LineColors
  lineLeft?: boolean
  lineBotton?: boolean
}
const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBotton = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBotton={lineBotton}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
