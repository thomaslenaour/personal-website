import React from 'react'
import TagItem from './tag-item'

const TagsList = ({ tags }) => <ul className="flex items-center flex-wrap text-white mt-2 text-xs">
  {tags.map(tag => {
    const tagName = tag.split('-')[0]
    const color = tag.split('-')[1]

    return <TagItem key={tag} name={tagName} color={color} />
  })}
</ul>

export default TagsList
