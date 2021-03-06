import { Link } from "gatsby"
import React from "react"
import MinutesDate from "../minutes-date"
import TagsList from "../tags/tags-list"

const CardItem = ({ item, type }) => {
  return type === 'project' ? (
    <div className="text-white">
      <Link to={`/projects/${item.node.slug}`}>
        <div
          className="relative bg-center bg-no-repeat bg-cover rounded-md shadow h-64 sm:h-80 lg:h-64 animate-scale-98"
          style={{ backgroundImage: `url(${item.node.image.localFile.publicURL})` }}
        >
          <div className="absolute top-0 w-full h-full bg-black opacity-50 z-10 rounded-md" />
          <h3 className="absolute font-bold text-xl md:text-2xl z-20 bottom-0 pb-2 px-3">{item.node.name}</h3>
        </div>
      </Link>
    </div>
  ) : (
    <Link to={`/posts/${item.node.slug}`}>
      <div className="border bg-white shadow-sm rounded-md p-3 animate-scale-98">
        <h3 className="font-bold text-xl md:text-2xl">{item.node.title}</h3>
        <TagsList tags={item.node.tags} />
        <MinutesDate time={item.node.readTime} date={item.node.publishedAt} />
      </div>
    </Link>
  )
}

export default CardItem
