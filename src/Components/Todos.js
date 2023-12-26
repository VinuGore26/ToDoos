import React from 'react'
import Todo from './Todo';

export default function Todos(props) {

  return (
    <div className='container my-5'>
      {props.todoos.length===0 ? "No Todoos are reamaining !" : 
      props.todoos.map( (todo) => {
        return <Todo todo={todo} key={todo.sno} onDone={props.onDone}/>
      })
    }
    </div>
  )
} 
