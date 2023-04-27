import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    // 1 = Renderizar o component (render)
    renderWithTheme(<Heading>Won Games</Heading>)

    // 2 = Selecionar o elemento a ser testado (screen)
    // 3 =  Criar o expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    // 1 = Renderizar o component (render)
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    // 2 = Selecionar o elemento a ser testado (screen)
    // 3 =  Criar o expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    // 1 = Renderizar o component (render)
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    // 2 = Selecionar o elemento a ser testado (screen)
    // 3 =  Criar o expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line at the botton ', () => {
    // 1 = Renderizar o component (render)
    renderWithTheme(<Heading lineBotton>Won Games</Heading>)

    // 2 = Selecionar o elemento a ser testado (screen)
    // 3 =  Criar o expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
