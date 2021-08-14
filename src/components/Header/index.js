import React from 'react'
import './style.css'

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">FILMFLIX</a>
      </div>
      <div className="header--user">
        <a href="/">Logar</a>
      </div>
    </header>
  )
}