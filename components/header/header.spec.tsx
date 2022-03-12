import render, { screen } from 'test-utils'
import nav from './nav.json'
import Header from '.'

describe('Header', () => {
  let useRouter = jest.spyOn(require('next/router'), 'useRouter')

  it('should pass snapshot', () => {
    useRouter.mockReturnValueOnce({ asPath: '/' })

    render(<Header />)

    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument()
    expect(header).toMatchSnapshot()
  })

  it('should change the active if on different location', () => {
    useRouter.mockReturnValueOnce({ asPath: nav[1].path })

    render(<Header />)

    const header = screen.getByTestId('header')
    const activeNavItem = header.querySelector('.active')

    expect(activeNavItem).toHaveTextContent(nav[1].label)
  })
})
