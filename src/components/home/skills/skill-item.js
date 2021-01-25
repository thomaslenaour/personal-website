import React from "react"

const SkillItem = ({ skill }) => {
  return (
    <li className="border border-yellow-400 p-2 rounded-lg mr-3 mb-2">
      {skill}
    </li>
  )
}

export default SkillItem
