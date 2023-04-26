import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()

    // Verificar se a o logo está na tela
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // Selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i)) // Simulando o click do usuário
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // Clicar no botão de fechar o menu, e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i)) // Simulando o click do usuário
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/Login now/i)).toBeInTheDocument()
    expect(screen.queryByText(/Sing Up/i)).toBeInTheDocument()
  })

  it('should show whishlist and account  when logged in', () => {
    renderWithTheme(<Menu userName="Felipe" />)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()

    expect(screen.queryByText(/Login now/i)).not.toBeInTheDocument() // Query é utilizado para quando não temos certeza se o elemento possui na tela
    expect(screen.queryByText(/Sing Up/i)).not.toBeInTheDocument() // Query é utilizado para quando não temos certeza se o elemento possui na tela
  })
})
