import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <div>
      <div className="Header">
        <h1>
          <span>Darbo užmokesčio (atlyginimo) </span>
          <span className="Header__border">skaičiuoklė</span>
        </h1>
        <span>Ši, darbo užmokesčio (atlyginimo) skaičiuoklė skirta darbo užmokesčio dydžio ir mokesčių skaičiavimui nuo <span className="Header__date-span">2019 m. sausio 1 d.</span></span>
      </div>
    </div>
  )
}

export default Header
