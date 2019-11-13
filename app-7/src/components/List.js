import React from 'react'
import Todo from './Todo'

export default function List(props) {
    return(<div>
        {props.tasks.map(el => <Todo data={el}/>)}
    </div>
    )
}