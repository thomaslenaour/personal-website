import React from "react"

import Button from "./button"

const ButtonBack = ({ content, link }) => <Button link={link} classes="inline-flex items-center mb-2 text-gray-400 hover:text-black">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
  {content}
</Button>

export default ButtonBack