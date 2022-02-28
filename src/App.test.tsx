import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App, { greet } from './App'

describe('greet', () => {
  it('returns a valid greeting given a name', () => {
    const result = greet('Nicolas')
    expect(result).toBe('Hello, Nicolas!')
  })
})

describe('App', () => {
  it('displays 0 when the app loads', () => {
    render(<App />)
    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('0')
  })

  it('increases counter by 1 when I press the + button', () => {
    render(<App />)
    const plusButton = screen.getByText('+')
    fireEvent.click(plusButton)

    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('1')
  })

  it('increases counter by 1 each time, if I click the + button many times', () => {
    render(<App />)
    const plusButton = screen.getByText('+')
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)

    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('4')
  })

  it('pressing - does not go below 0', () => {
    render(<App />)
    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('0')

    const minusButton = screen.getByText('-')
    fireEvent.click(minusButton)

    expect(display.textContent).toBe('0')
  })

  it('pressing - descreases the counter by 1 when above 0', () => {
    render(<App />)
    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('0')

    const plusButton = screen.getByText('+')
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    expect(display.textContent).toBe('3')

    const minusButton = screen.getByText('-')
    fireEvent.click(minusButton)

    expect(display.textContent).toBe('2')
  })
})
