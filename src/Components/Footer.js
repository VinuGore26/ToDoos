import React from 'react'

export default function Todos() {

  let styleAdded = {
    position: 'relative',
    bottom: '0vh',
    width: '100%',
    height: '44px',
    fontSize: '15px',
    paddingTop: '12px'
  }

  return (
    <footer className="bg-dark text-light text-center" style={styleAdded}>
      Coprights &copy; 2023 ToDoos.com
    </footer>
  )
}
