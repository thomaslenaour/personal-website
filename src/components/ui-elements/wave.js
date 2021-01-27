import React from "react"

const Wave = ({ color, classes, reverse }) => {
  if (reverse) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
        className={classes}
        preserveAspectRatio="xMinYMax meet"
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,213.3C672,213,768,139,864,106.7C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 300"
      className={classes}
      preserveAspectRatio="xMinYMax meet"
    >
      <path
        fill={color}
        fillOpacity="1"
        d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,213.3C672,213,768,139,864,106.7C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  )
}

export default Wave
