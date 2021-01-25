import React from "react"
import { Link } from "gatsby"

const Button = ({ children, link, classes }) => {
  return link ? (
    <Link to={link} className={`transition duration-300 ${classes}`}>
      {children}
    </Link>
  ) : (
    <button className={`transition duration-300 ${classes}`}>
      {children}
    </button>
  )
}

export default Button