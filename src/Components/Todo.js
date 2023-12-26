import React from 'react'

export default function Todos({todo, onDone}) {
  return (
    <>
    <div className="container my-3 border p-3 border-2 border-dark rounded">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={() => onDone(todo)}>Done</button>
    </div>
    </>
  )
} 
