import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'ui/theme/ThemeProvider'
import { DropdownBase, Item } from './DropdownBase'

const dropdownItems: Array<Item> = [
  { value: 'Русский', content: 'Русский' },
  { value: 'Английский', content: 'Английский' },
  { value: 'Китайский', content: 'Китайский' },
  { value: 'Испанский', content: 'Испанский' },
]

test('Test Render', () => {
  render(
    <ThemeProvider>
      <DropdownBase title={dropdownItems[0].content} id='test' items={dropdownItems} />
    </ThemeProvider>,
  )
  const buttonEl = screen.getByRole('button')

  const item = screen.getByText('Русский')

  expect(item).toBeInTheDocument()

  fireEvent.click(buttonEl)

  const item2 = screen.getByRole('combobox')

  expect(item2).toBeInTheDocument()
})
