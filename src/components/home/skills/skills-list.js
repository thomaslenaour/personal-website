import React from "react"

import SkillItem from './skill-item'

const SkillsList = ({ skills, classes }) => {
  return (
    <ul
      className={`flex flex-wrap items-center text-sm text-yellow-400 ${classes}`}
    >
      {skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </ul>
  )
}

export default SkillsList
