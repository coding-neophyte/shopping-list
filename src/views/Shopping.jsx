import React from 'react'
import { useReducer } from 'react'
import AddItem from '../components/AddItem'
import ListItems from '../components/ListItems'

export default function Shopping() {
    const initialItemList = [
        { id: 0, text: 'Milk' },
        { id: 1, text: 'Bread' },
        { id: 2, text: 'Cheese' }
    ]


    const itemsReducer = (items, action) => {
        switch(action.type){
            case 'addItem': {
                return[...items, { id: items.length, text: action.text}, ]
            }
            case 'changeItem' : {
                return items.map((item) => {
                    if(item.id === action.task.id){
                        item.text = action.task.text
                    }
                    return item
                })
            }
            case 'delete' : {
                return items.filter((item) => item.id !== action.id);

            }
            default : {
                throw Error('add, edit or delete item only')
            }
        }
    }

    const[items, dispatch] = useReducer(itemsReducer, initialItemList)

    const addItems = (text) => {
        dispatch({
            type: 'addItem',
            text,
        })
    }

    const changeItems = (task) =>{
        dispatch({
            type: 'changeItem',
            task,
        })
    }

    const deleteItems = (taskId) => {
        dispatch({
            type: 'delete',
            id: taskId,
        })
    }
    return (
        <div>
            <h1> Add Items To Shopping List </h1>
            <AddItem addNewItem={addItems}/>
            <ListItems items={items} handleChangeItem={changeItems} handleDeleteItem={deleteItems}/>

        </div>
    )
}
