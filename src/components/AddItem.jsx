import React from 'react'
import { useState } from 'react'

export default function AddItem({ addNewItem }) {
    const [itemtext, setItemText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewItem(itemtext)
        setItemText('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' aria-label='add-input' value={itemtext} onChange={(e) => setItemText(e.target.value)} />
                <button type='submit'>Add Item</button>
            </form>
        </div>
    )
}
