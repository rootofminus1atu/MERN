import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <div className="max-width header-content">
        <h2><Link to="/">Home</Link></h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
