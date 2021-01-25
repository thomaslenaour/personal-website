import React from "react"

const MinutesDate = ({ time, date, classes }) => <div className={`flex items-center ${classes}`}>
  <span className="flex items-center text-gray-400 text-sm mr-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 mr-1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    {`${time} minute${time > 1 ? 's' : ''}`}
  </span>
  <span className="flex items-center text-gray-400 text-sm">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 mr-1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    {date}
  </span>
</div>

export default MinutesDate
