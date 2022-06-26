import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './app'

test('renders learn react link', () => {
  render(<App />)

  screen.getByTitle('Bookshelf')
  screen.getByRole('heading', {name: /Bookshelf/i})
  screen.getByRole('button', {name: /Login/i})
  screen.getByRole('button', {name: /Register/i})
})
