import React from 'react'
import { useState } from 'react'

export default function Item({ item, onChange, onDelete }) {
    const[updating, setUpdating] = useState(false)

    let itemInfo
    if(updating){
        itemInfo=(
            <>
        <input type='text' value={item.text} aria-label='edit-input' name='edit-input'  onChange={(e) => {onChange({ ...item, text: e.target.value, })}
    }/>
    <button type='button' onClick={() => setUpdating(false)}>Save Item</button>

    </>
        )
} else {
    itemInfo = (
        <>
            <p>
                {item.text}
            </p>
            <button type='button' aria-label={`edit${item.id}`} onClick={() => setUpdating(true)}> Edit Item</button>
        </>
    )
}
    return (
        <div>
            {itemInfo}
            <button type='button' aria-label='delete' onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    )
}
