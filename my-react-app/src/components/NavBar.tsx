import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ marginRight: 12 }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: 12 }}>
        About Us
      </Link>
      <Link to="/services">Services</Link>
    </nav>
  )
}

export default NavBar
