import React, { ReactNode } from 'react'
import * as S from './styles'

// Criar types para o botão

export type ButtonProps = {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
}
const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
