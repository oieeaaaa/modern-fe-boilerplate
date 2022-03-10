import render, { screen } from 'test-utils'
import Button from '.'

describe('Button', () => {
  it('should pass', () => {
    render(<Button>Yo</Button>)

    expect(screen.getByText('Yo')).toBeInTheDocument()
    expect(screen.getByRole('button')).toMatchSnapshot()
  })
})
