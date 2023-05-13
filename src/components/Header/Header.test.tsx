import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

describe('Header', () => {
  const schools = [
    { id: '1', name: 'Aroroy East Central School' },
    { id: '2', name: 'Balawing Elementary School' }
  ]
  it('displays the menu options', () => {
    const { container } = render(<Header schools={schools} />)
    expect(container.querySelector('p')?.textContent).toEqual('Aroroy East Central School')

    fireEvent.click(screen.getByTestId('school-menu'))

    const menuOption = screen.getByText(schools[1].name)
    expect(menuOption).toBeInTheDocument()

    const selectedOption = screen.queryAllByText(schools[0].name)
    expect(selectedOption.length).toBe(2)
  })

  it('selects an option', () => {
    const { container } = render(<Header schools={schools} />)
    expect(container.querySelector('p')?.textContent).toEqual('Aroroy East Central School')

    fireEvent.click(screen.getByTestId('school-menu'))

    const option2 = screen.getByText(schools[1].name)
    fireEvent.click(option2)

    expect(screen.queryAllByText(schools[1].name).length).toBe(2)
  })
})
