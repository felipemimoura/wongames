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
      'border-left': '0.7rem solid #F231A5'
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
  it('should render a heading with  small size ', () => {
    // 1 = Renderizar o component (render)
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    // 2 = Selecionar o elemento a ser testado (screen)
    // 3 =  Criar o expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should be render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBotton>
        Won games
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /won games/i })

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should be render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBotton>
        Won games
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /won games/i })

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
