import React from "react"

const TitleText = ({ title, classes, children }) => {
  return (
    <div className={classes}>
      <h2 className="main-title mb-5">{title}</h2>
      <p className="text-justify">{children}</p>
    </div>
  )
}

export default TitleText
