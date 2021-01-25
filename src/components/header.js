import { Link } from "gatsby"
import React from 'react'

import logoBlack from '../images/logos/logo-black.png'

const isPartiallyActive = ({
  isPartiallyCurrent
}) => {
  return isPartiallyCurrent
    ? { className: "text-black" }
    : {}
}

const Header = () => (
  <header className="main-container py-5">
    <div className="flex justify-between items-center">
      <Link to="/">
        <img src={logoBlack} alt="Logo TLN - Thomas Le Naour" className="w-20" />
      </Link>
      <nav>
        <ul className="flex items-center text-gray-400 space-x-10">
          <li>
            <Link to="/projects" getProps={isPartiallyActive} className="transition duration-300 hover:text-black focus:outline-none">Projets</Link>
          </li>
          <li>
            <Link to="/posts" getProps={isPartiallyActive} className="transition duration-300 hover:text-black focus:outline-none">Articles</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
