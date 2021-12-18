import { screen, render } from '@testing-library/react'
import userEvent  from '@testing-library/user-event'
import App from './App'




it('should render list of items', () => {
    render(<App />)
    const listItems = screen.getByRole('list')

    expect(listItems).toHaveTextContent('Milk')
    expect(listItems).toHaveTextContent('Bread')
    expect(listItems).toHaveTextContent('Cheese')
})

it('should add item to the list', () => {
    render(<App />)
    const addInput = screen.getByRole('textbox', { name: 'add-input' })
    const addButton = screen.getByRole('button', { name: 'Add Item' })
    const listItems = screen.getByRole('list')

    userEvent.type(addInput, 'Chicken')
    userEvent.click(addButton);

    expect(listItems).toHaveTextContent('Chicken')
})

it('should edit an item', () => {
    render(<App />)

    const editButton = screen.getByRole('button', { name: 'edit1'})

    userEvent.click(editButton)
    const editInput = screen.getByRole('textbox', { name: 'edit-input' })

    expect(editInput).toBeInTheDocument()
})

it('should delete an item', async () => {
    render(<App />)
    const deleteButton = screen.getAllByText('Delete')
    const bread = screen.getByText('Bread');
    userEvent.click(deleteButton[1])

    expect(bread).not.toBeInTheDocument();
})
