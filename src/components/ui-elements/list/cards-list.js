import React from "react"

import CardItem from "./card-item"

const CardsList = ({ title, description, items, type }) => {
  return (
    <section className="main-container py-7">
      <h2 className="main-title mb-3 text-underline">
        {title}
      </h2>
      <p className="mb-5">{description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {items.length > 0 ? (
          items.map(item => <CardItem key={item.node.id} item={item} type={type} />)
        ) : (
          <p>Aucune donnée à afficher pour le moment</p>
        )}
      </div>
    </section>
  )
}

export default CardsList
