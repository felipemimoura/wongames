import React, { ReactNode } from 'react'
import * as S from './styles'

// [x] Criar a prop de Icone
// [x] Adicionar verificação para Icon no estilos
// [x] Criar story para Button com Icone
export type ButtonProps = {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
