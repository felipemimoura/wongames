import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // 1 = Renderizar o component (render)
    renderWithTheme(<Logo />)

    // 2 = Selecionar o elemento a ser testado (screen)
    // 3 =  Criar o expect
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    // 1 = Renderizar o component (render)
    renderWithTheme(<Logo color="black" />)

    // 2 = Selecionar o elemento a ser testado (screen)
    // 3 =  Criar o expect
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
