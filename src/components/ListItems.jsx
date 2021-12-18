import React from 'react'
import Item from './Item'
import './ListItems.css'

export default function ListItems({ items, handleChangeItem, handleDeleteItem }) {
    return (
        <div>
            <ul>
            {items.map((item) => {
                return <li key={item.id}>
                    <Item item={item} onChange={handleChangeItem} onDelete={handleDeleteItem}/>
                 </li>})}

            </ul>
        </div>
    )
}
