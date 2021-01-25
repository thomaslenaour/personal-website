import React from "react"

const TagItem = ({ name, color }) => <li className={`px-2 py-1 bg-${color}-300 rounded mr-2 mb-2`}>{name}</li>

export default TagItem